import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Extract text from PDF with question counting
 */
async function extractPDF(pdfPath) {
  try {
    console.log(`\n📄 Extracting PDF: ${pdfPath}\n`);
    
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    
    console.log('📊 PDF Information:');
    console.log(`   Pages: ${data.numpages}`);
    console.log(`   Text Length: ${data.text.length} characters\n`);
    
    // Extract and analyze text
    const text = data.text;
    
    // Count questions by looking for common patterns
    const questionPatterns = [
      /^\s*\d+\.\s+/gm,              // 1. Question format
      /^\s*Q\s*\d+[\.\):\s]/gm,      // Q1. or Q1) format
      /^\s*Question\s+\d+/gm,         // Question 1 format
      /^\s*\(\d+\)/gm,                // (1) format
      /^\s*\[\d+\]/gm,                // [1] format
    ];
    
    const allMatches = new Set();
    questionPatterns.forEach(pattern => {
      const matches = text.matchAll(pattern);
      for (const match of matches) {
        allMatches.add(match[0].trim());
      }
    });
    
    console.log('🔍 Question Markers Found:');
    const sortedMarkers = Array.from(allMatches).sort();
    sortedMarkers.forEach((marker, index) => {
      console.log(`   ${index + 1}. ${marker}`);
    });
    
    console.log(`\n📝 Total Question Markers: ${allMatches.size}\n`);
    
    // Look for sections
    const sectionPattern = /(?:Section|Part|SECTION|PART)\s+[A-Z]/gi;
    const sections = text.match(sectionPattern);
    if (sections) {
      console.log('📑 Sections Found:');
      sections.forEach(section => console.log(`   ${section}`));
      console.log('');
    }
    
    // Save extracted text to file
    const outputPath = pdfPath.replace('.pdf', '-extracted.txt');
    fs.writeFileSync(outputPath, text);
    console.log(`💾 Extracted text saved to: ${outputPath}\n`);
    
    // Save analysis report
    const reportPath = pdfPath.replace('.pdf', '-analysis.txt');
    const report = `
PDF Analysis Report
===================
File: ${path.basename(pdfPath)}
Date: ${new Date().toLocaleDateString()}

PDF Information:
- Total Pages: ${data.numpages}
- Text Length: ${data.text.length} characters

Sections Found:
${sections ? sections.join('\n') : 'No sections detected'}

Question Markers Found (${allMatches.size}):
${sortedMarkers.join('\n')}

Full Text:
${text}
`;
    fs.writeFileSync(reportPath, report);
    console.log(`📋 Analysis report saved to: ${reportPath}\n`);
    
    return {
      pages: data.numpages,
      text: text,
      questionCount: allMatches.size,
      sections: sections,
      markers: sortedMarkers
    };
    
  } catch (error) {
    console.error('❌ Error extracting PDF:', error);
    throw error;
  }
}

// Main execution
const pdfPath = process.argv[2] || path.join(__dirname, '../RawContent/Accountancy/Accountancy-SQP.pdf');

if (!fs.existsSync(pdfPath)) {
  console.error(`❌ PDF file not found: ${pdfPath}`);
  process.exit(1);
}

extractPDF(pdfPath)
  .then(result => {
    console.log('✅ Extraction complete!');
    console.log(`\n📊 Summary:`);
    console.log(`   Pages: ${result.pages}`);
    console.log(`   Estimated Questions: ${result.questionCount}`);
    console.log(`   Sections: ${result.sections ? result.sections.length : 0}`);
  })
  .catch(error => {
    console.error('❌ Failed to extract PDF');
    process.exit(1);
  });

"""
PDF Text Extraction with OCR Support
Extracts text from PDFs and counts questions
"""

import sys
import os
from pathlib import Path

try:
    import PyPDF2
    from pdf2image import convert_from_path
    import pytesseract
    from PIL import Image
except ImportError as e:
    print(f"❌ Missing dependency: {e}")
    print("\nPlease install required packages:")
    print("  pip install PyPDF2 pdf2image pytesseract pillow")
    sys.exit(1)

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF using PyPDF2"""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            text = ""
            num_pages = len(pdf_reader.pages)
            
            print(f"\n📄 Extracting PDF: {pdf_path}")
            print(f"📊 Total Pages: {num_pages}\n")
            
            for page_num, page in enumerate(pdf_reader.pages, 1):
                page_text = page.extract_text()
                text += f"\n--- Page {page_num} ---\n{page_text}"
                print(f"   Extracted page {page_num}/{num_pages}", end='\r')
            
            print(f"\n✅ Extracted {len(text)} characters")
            return text, num_pages
    except Exception as e:
        print(f"❌ Error reading PDF: {e}")
        return None, 0

def count_questions(text):
    """Count questions using multiple patterns"""
    import re
    
    patterns = [
        r'^\s*\d+\.\s+',              # 1. Question format
        r'^\s*Q\s*\d+[\.\):\s]',      # Q1. or Q1) format
        r'^\s*Question\s+\d+',        # Question 1 format
        r'^\s*\(\d+\)',               # (1) format
        r'^\s*\[\d+\]',               # [1] format
    ]
    
    all_matches = set()
    for pattern in patterns:
        matches = re.finditer(pattern, text, re.MULTILINE)
        for match in matches:
            all_matches.add(match.group().strip())
    
    return sorted(all_matches)

def find_sections(text):
    """Find sections in the text"""
    import re
    section_pattern = r'(?:Section|Part|SECTION|PART)\s+[A-Z]'
    sections = re.findall(section_pattern, text, re.IGNORECASE)
    return sections

def analyze_pdf(pdf_path):
    """Main analysis function"""
    
    # Extract text
    text, num_pages = extract_text_from_pdf(pdf_path)
    if not text:
        return
    
    # Count questions
    question_markers = count_questions(text)
    
    print(f"\n🔍 Question Markers Found:")
    for i, marker in enumerate(question_markers, 1):
        print(f"   {i}. {marker}")
    
    print(f"\n📝 Total Question Markers: {len(question_markers)}")
    
    # Find sections
    sections = find_sections(text)
    if sections:
        print(f"\n📑 Sections Found:")
        for section in sections:
            print(f"   {section}")
    
    # Save extracted text
    output_path = pdf_path.replace('.pdf', '-extracted.txt')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(text)
    print(f"\n💾 Extracted text saved to: {output_path}")
    
    # Save analysis report
    report_path = pdf_path.replace('.pdf', '-analysis.txt')
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write(f"""PDF Analysis Report
===================
File: {os.path.basename(pdf_path)}
Date: {Path(pdf_path).stat().st_mtime}

PDF Information:
- Total Pages: {num_pages}
- Text Length: {len(text)} characters

Sections Found:
{chr(10).join(sections) if sections else 'No sections detected'}

Question Markers Found ({len(question_markers)}):
{chr(10).join(question_markers)}

{'='*60}
Full Text:
{'='*60}
{text}
""")
    print(f"📋 Analysis report saved to: {report_path}")
    
    print(f"\n✅ Extraction complete!")
    print(f"\n📊 Summary:")
    print(f"   Pages: {num_pages}")
    print(f"   Estimated Questions: {len(question_markers)}")
    print(f"   Sections: {len(sections) if sections else 0}")

if __name__ == '__main__':
    pdf_path = sys.argv[1] if len(sys.argv) > 1 else 'RawContent/Accountancy/Accountancy-SQP.pdf'
    
    if not os.path.exists(pdf_path):
        print(f"❌ PDF file not found: {pdf_path}")
        sys.exit(1)
    
    analyze_pdf(pdf_path)

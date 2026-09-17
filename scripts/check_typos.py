import glob, re

files = sorted(glob.glob('src/**/*.ts*', recursive=True) + glob.glob('public/**/*.html') + ['index.html'])

def scan_file(f):
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()

    # Check for acute/grave accent misspellings
    patterns = [
        (r'\b(perchè)\b', 'perché'),
        (r'\b(poichè)\b', 'poiché'),
        (r'\b(affinchè)\b', 'affinché'),
        (r'\b(benchè)\b', 'benché'),
        (r'\b(dopodichè)\b', 'dopodiché'),
        (r'\b(giacchè)\b', 'giacché'),
        (r'\b(purchè)\b', 'purché'),
        (r'\b(nonchè)\b', 'nonché'),
        (r'\b(cosicchè)\b', 'cosicché'),
        (r'\b(ventitre|trentatre|quarantatre|cinquantatre)\b', 'ventitré/trentatré...'),
        (r'qual\'è', 'qual è (senza apostrofo)'),
        (r'qual\'e\b', 'qual è'),
        (r'\bun pò\b', 'un po\''),
        (r'\bun po\b(?!\')', 'un po\''),
        (r'\bsopratutto\b', 'soprattutto'),
        (r'\bareazione\b', 'aerazione'),
        (r'\bconsolina\b', 'consolida'),
        (r'\bsufficente\b', 'sufficiente'),
        (r'\befficente\b', 'efficiente'),
        (r'\bconoscenza\b', 'conoscenza'),
        (r'\bcoscenza\b', 'coscienza'),
        (r'\beccezzione\b', 'eccezione'),
        (r'\beccezzionale\b', 'eccezionale'),
        (r'\bpropio\b', 'proprio'),
        (r'\bfa\'\b', 'fa'),
        (r'\bsta\'\b', 'sta'),
        (r'\bva\'\b', 'va'),
        (r'\bda\'\b', 'dà o da'),
        (r'\bsi\'\b', 'sì'),
        (r'\bfar si che\b', 'far sì che'),
        (r'\bfar si\b', 'far sì'),
        (r'\be\'\s', 'è '),
        (r'\bE\'\s', 'È '),
    ]

    for pat, rep in patterns:
        for m in re.finditer(pat, content, re.IGNORECASE):
            s = max(0, m.start() - 30)
            e = min(len(content), m.end() + 30)
            snippet = content[s:e].replace('\n', ' ')
            # Filter out non-prose occurrences
            if 'import ' in snippet or 'const ' in snippet or 'function ' in snippet or 'type ' in snippet:
                continue
            print(f'{f}: [{m.group(0)}] -> {rep} | Context: "{snippet}"')

for f in files:
    scan_file(f)

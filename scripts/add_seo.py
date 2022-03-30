#!/bin/env python
SEO_CONTENT = '''<title>Zvonimir Rudinski</title>
<meta name="title" content="Zvonimir Rudinski" />
<meta
name="description"
content="A professional and highly experienced web wizard. Master of all web technologies and beyond. React, Drupal, Elixir? Sure."
/>

<meta property="og:type" content="website" />
<meta property="og:url" content="https://zvonimirr.github.io/" />
<meta property="og:title" content="Zvonimir Rudinski" />
<meta
property="og:description"
content="A professional and highly experienced web wizard. Master of all web technologies and beyond. React, Drupal, Elixir? Sure."
/>
<meta
property="og:image"
content="https://avatars.githubusercontent.com/u/18758022?v=4"
/>

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://zvonimirr.github.io/" />
<meta property="twitter:title" content="Zvonimir Rudinski" />
<meta
property="twitter:description"
content="A professional and highly experienced web wizard. Master of all web technologies and beyond. React, Drupal, Elixir? Sure."
/>
<meta property="twitter:image"
content=https://avatars.githubusercontent.com/u/18758022?v=4" />'''

filename = 'dist/index.html'

# Read in the file
with open(filename, 'r') as file:
    filedata = file.read()

# Replace the target string
filedata = filedata.replace('<!-- SEO -->', SEO_CONTENT)

# Write the file out again
with open(filename, 'w') as file:
    file.write(filedata)

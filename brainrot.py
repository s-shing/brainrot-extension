import subprocess
import sys, os

content = b""
replacements = [(b"\xf0\x9f\x92\x80", b"dead"),
                (b"\xf0\x9f\x98\xad", b"SOB"),
                (b"\xf0\x9f\x92\x94", b"BROKEN"),
                (b"\xf0\x9f\xa5\x80", b"WILT"),
                (b"skibidi", b"#include")]

with open(sys.argv[1], "rb") as f:
    content = f.read()

content = b'#include "brainrot.h"\r\n\r\n' + content
for r in replacements:
    content = content.replace(r[0], r[1])

with open("output.c", "wb") as f:
    f.write(content)


os.system("gcc output.c -o test")
os.system("test.exe")
# subprocess.run(["gcc", "output.c", "-o", "test"])
# subprocess.run(["./test"])
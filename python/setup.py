import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="kielbasa",
    version="0.0.2",
    author="Josh Smith",
    author_email="josh@joshingmachine.com",
    description="All-Natural Casing Utilities",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/joshingmachine/kielbasa",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)

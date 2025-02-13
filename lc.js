function showCode(language) {
    document.getElementById('java-code').style.display = (language === 'java') ? 'block' : 'none';
    document.getElementById('python-code').style.display = (language === 'python') ? 'block' : 'none';
    document.getElementById('smd-java').style.display = (language === 'java') ? 'block' : 'none';
    document.getElementById('smd-py').style.display = (language === 'python') ? 'block' : 'none';
    document.getElementById('pn-java').style.display = (language === 'java') ? 'block' : 'none';
    document.getElementById('pn-py').style.display = (language === 'python') ? 'block' : 'none';
    document.getElementById('pn1-java').style.display = (language === 'java') ? 'block' : 'none';
    document.getElementById('pn1-py').style.display = (language === 'python') ? 'block' : 'none';
}

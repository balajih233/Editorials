function showCode(language) {
    document.getElementById('java-code').style.display = (language === 'java') ? 'block' : 'none';
    document.getElementById('python-code').style.display = (language === 'python') ? 'block' : 'none';
    document.getElementById('LT-java').style.display = (language === 'java') ? 'block' : 'none';
    document.getElementById('LT-py').style.display = (language === 'python') ? 'block' : 'none';
}

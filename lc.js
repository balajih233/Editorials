function showCode(language) {
    document.getElementById('java-code').style.display = (language === 'java') ? 'block' : 'none';
    document.getElementById('python-code').style.display = (language === 'python') ? 'block' : 'none';
    document.getElementById('smd-java').style.display = (language === 'java') ? 'block' : 'none';
    document.getElementById('smd-py').style.display = (language === 'python') ? 'block' : 'none';
}

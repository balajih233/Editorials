function showCode(language) {
    
    document.getElementById('saa-java').style.display = (language === 'java') ? 'block' : 'none';
    document.getElementById('saa-py').style.display = (language === 'python') ? 'block' : 'none';
    document.getElementById('sao-java').style.display = (language === 'java') ? 'block' : 'none';
    document.getElementById('sao-py').style.display = (language === 'python') ? 'block' : 'none';
    document.getElementById('wm-java').style.display = (language === 'java') ? 'block' : 'none';
    document.getElementById('wm-py').style.display = (language === 'python') ? 'block' : 'none';
}

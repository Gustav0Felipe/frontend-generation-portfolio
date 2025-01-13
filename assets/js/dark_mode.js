

document.getElementById('dark_mode').addEventListener('click', function(event){
    event.preventDefault();

    const header = document.getElementById('header_content');
    const footer = document.getElementById('footer_content');
    if(header.style.backgroundColor != 'black'){
        header.style.backgroundColor = 'black';
        header.style.borderBottom = '1px solid black';
        document.body.style.backgroundColor = 'var(--gray-400)';
        footer.style.backgroundColor = 'black';



    }else{
        header.style.backgroundColor = 'var(--purple-800)';
        header.style.borderBottom = '1px solid var(--purple-500)';
        document.body.style.backgroundColor = 'var(--gray-200)';
        footer.style.backgroundColor = 'var(--purple-800)';
    }
});
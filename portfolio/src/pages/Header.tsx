import { Link } from 'react-router-dom';

function Header(){
    function dark_mode(){
        const header = document.getElementById('header_content');
        const footer = document.getElementById('footer_content');

        if(!header || !footer){
            return null;
        }

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
    }

    return(
    <>
    <header>
        <div id="header_content" className="flex">
            <div id="titulo">
                <h1>Generation Brasil</h1>
            </div>
            
            <div id="menu">
                <nav>
                    <ul id="menu">
                        <li>
                            <Link to={"/perfil"}> Home </Link>
                        </li>
                        <li>
                            <Link to={"/contato"}> Contato </Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined" id="dark_mode" onClick={dark_mode}>
                                dark_mode
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    </>
    )
}

export default Header;
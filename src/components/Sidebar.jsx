import { useState } from "react";

function Sidebar() {

    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    function showMenu() {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            mainContent.classList.toggle('active');
        });
    }

    return (
        <div className="sidebar">
            <div class="div-sidebar" id="sidebar" >


                <button id="menu-toggle" onClick={showMenu}>&#9776;</button>
                <h3 className='title'>LifePlus</h3>
                <nav>
                    <a href="#" class="itens-sidebar">Link 1</a>
                    <a href="#" class="itens-sidebar">Link 2</a>
                    <a href="#" class="itens-sidebar">Link 3</a>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
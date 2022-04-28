export default function initTooltip() {
    
    // Variáveis 
    const tooltipMap = document.querySelectorAll('[data-tooltip]');

    // Eventos
    tooltipMap.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    });

    // Funções 

    function onMouseOver(event) {
        const tooltipBox = criarTooltip(this);
        tooltipBox.style.top = event.pageY + 'px';
        tooltipBox.style.left = event.pageX + 'px';

        this.addEventListener('mouseleave', onMouseleave)
        function onMouseleave() {
            tooltipBox.remove();
        }    
    }

    function criarTooltip(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label')
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox
    }
}

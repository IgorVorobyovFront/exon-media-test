function collapseFunction(event, bodyElementId) {
    const parent = event.path.find(el => el.className === 'element');
    const expandButtonsRefs = [...parent.getElementsByClassName('show-more')];
    const bodyRef = [...parent.getElementsByClassName('element-body')][0];
    const classList = [...bodyRef.classList];
    if (classList.includes('collapsed')){
        expandButtonsRefs.forEach(ref => {
            ref.classList.remove('collapsed');
            ref.innerHTML = 'Show less';
        })
        bodyRef.classList.remove('collapsed');
    } else {
        expandButtonsRefs.forEach(ref => {
            ref.classList.add('collapsed');
            ref.innerHTML = 'Show more';
        })
        bodyRef.classList.add('collapsed');
    }
}
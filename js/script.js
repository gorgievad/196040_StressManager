let startDate = document.getElementById('startDate');

startDate.addEventListener('change',(e)=>{
    let startDateVal = e.target.value
    document.getElementById('startDateSelected').innerText = startDateVal
});
var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
var collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl)
});


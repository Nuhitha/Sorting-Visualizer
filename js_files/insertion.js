async function insertion(){
    console.log('in insertion');
    const ele=document.querySelectorAll(".bar");
    ele[0].computedStyleMap.background='green';
    for(let i=1;i<ele.length;i++){
        let j=i-1;
        let key=ele[i];
        ele[i].computedStyleMap.background='blue';
        await waitforme(delay);
        while(j>=0 &&(parseInt(ele[j].style.height)>parseInt(key))){
            ele[j].style.background='blue';
            ele[j+1].style.height=ele[j].style.height;
            j--;
            await waitforme(delay);
            for(letk=i;k>=0;k--){
                ele[k].style.baclground='green';

            }
        }
        ele[j+1].style.height=key;
        ele[i].style.background='green';
    }
}
const inSortbtn=document.querySelector(".insertionSort");
inSortbtn.addEventListener('click',async function(){
    disableSortngBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})
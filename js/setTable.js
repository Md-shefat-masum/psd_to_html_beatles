$(function(){
    console.log(siteData);

    content = siteData.top_gretting.content;
    $('#siteData-top_gretting-content').val(content);

    $('.siteData-top_gretting-content-content-save').on('click',function(e){
        let changed_value = e.target.previousElementSibling.value;
        siteData.top_gretting.content = changed_value;
        console.log(changed_value, siteData);
    });

    // document.querySelector('#siteData-top_gretting-content').value = siteData.top_gretting.content;
});
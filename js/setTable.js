$(function(){
    // console.log(siteData);

    // $.post('http://mydata.sobujdiganta.com/data.php',{name: JSON.stringify(siteData)},function(response){
    //     console.log(response);
    // });

    let getData = {};
    $.get('http://mydata.sobujdiganta.com/getData.php',function(e){
        getData = JSON.parse(e);
        console.log(getData);

        // site main works

        // top greting section
        content = getData.top_gretting.content;
        $('#siteData-top_gretting-content').val(content);

        $('.siteData_content_save_top_greeting').on('click',function(e){
            let changed_value = e.target.previousElementSibling.value;
            getData.top_gretting.content = changed_value;

            $.post('http://mydata.sobujdiganta.com/data.php',{name: JSON.stringify(getData)},function(response){
                console.log(response);
            });
            console.log(changed_value, getData);
        });

        // social icon section

        // facebook
        content = getData.header_social_links.facebook.link; //get data from object
        $('#siteData_header_social_links_facebook').val(content);

        $('.siteData_content_save_fb').on('click',function(e){ //should be chage button class name
            let changed_value = e.target.previousElementSibling.value;
            getData.header_social_links.facebook.link = changed_value; //set data to object

            $.post('http://mydata.sobujdiganta.com/data.php',{name: JSON.stringify(getData)},function(response){
                console.log(response);
            });
            console.log(changed_value, getData);
        });


        document.querySelector('#siteData-top_gretting-content').value = getData.top_gretting.content;
    });

    
});
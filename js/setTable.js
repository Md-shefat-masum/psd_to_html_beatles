$(function(){
    // console.log(siteData);


    // set data to server for first time
    // $.post('http://mydata.sobujdiganta.com/data.php',{name: JSON.stringify(siteData)},function(response){
    //     console.log(response);
    // });

    // save data to local file from sever after changing every thing
    // $.get('http://mydata.sobujdiganta.com/getData.php',function(e){
    //     console.log(e);
    // });

    let getData = {};
    $.get('http://mydata.sobujdiganta.com/getData.php',function(e){
        getData = JSON.parse(e);
        // console.log(getData);

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
            
        });
        
        // twitter
        content = getData.header_social_links.twitter.link; //get data from object
        $('#siteData_content_save_twitter').val(content);

        $('.siteData_content_save_twitter').on('click',function(e){ //should be chage button class name
            let changed_value = e.target.previousElementSibling.value;
            getData.header_social_links.twitter.link = changed_value; //set data to object

            $.post('http://mydata.sobujdiganta.com/data.php',{name: JSON.stringify(getData)},function(response){
                console.log(response);
            });
            
        });
        
        // linkedin
        content = getData.header_social_links.linkedin.link; //get data from object
        $('#siteData_content_save_linkedin').val(content);

        $('.siteData_content_save_linkedin').on('click',function(e){ //should be chage button class name
            let changed_value = e.target.previousElementSibling.value;
            getData.header_social_links.linkedin.link = changed_value; //set data to object

            $.post('http://mydata.sobujdiganta.com/data.php',{name: JSON.stringify(getData)},function(response){
                console.log(response);
            });
            
        });
        
        // github
        content = getData.header_social_links.github.link; //get data from object
        $('#siteData_content_save_github').val(content);

        $('.siteData_content_save_github').on('click',function(e){ //should be chage button class name
            let changed_value = e.target.previousElementSibling.value;
            getData.header_social_links.github.link = changed_value; //set data to object

            $.post('http://mydata.sobujdiganta.com/data.php',{name: JSON.stringify(getData)},function(response){
                console.log(response);
            });
            
        });
        
        // header_logo
        content = getData.header_logo.content; //get data from object
        $('#siteData_content_save_header_logo').val(content);

        $('.siteData_content_save_header_logo').on('click',function(e){ //should be chage button class name
            let changed_value = e.target.previousElementSibling.value;
            getData.header_logo.content = changed_value; //set data to object

            $.post('http://mydata.sobujdiganta.com/data.php',{name: JSON.stringify(getData)},function(response){
                console.log(response);
            });
            
        });
        
        // banner
        content = getData.banner.banner1.image; //get data from object
        $('#siteData_content_save_banner1_image').val(content);

        $('.siteData_content_save_banner1_image').on('click',function(e){ //should be chage button class name
            let changed_value = e.target.previousElementSibling.value;
            getData.banner.banner1.image = changed_value; //set data to object

            $.post('http://mydata.sobujdiganta.com/data.php',{name: JSON.stringify(getData)},function(response){
                console.log(response);
            });
            
        });

        content = getData.banner.banner1.h2; //get data from object
        $('#siteData_content_save_banner1_h2').val(content);

        $('.siteData_content_save_banner1_h2').on('click',function(e){ //should be chage button class name
            let changed_value = e.target.previousElementSibling.value;
            getData.banner.banner1.h2 = changed_value; //set data to object

            $.post('http://mydata.sobujdiganta.com/data.php',{name: JSON.stringify(getData)},function(response){
                console.log(response);
            });
            
        });

        content = getData.banner.banner1.h1; //get data from object
        $('#siteData_content_save_banner1_h1').val(content);

        $('.siteData_content_save_banner1_h1').on('click',function(e){ //should be chage button class name
            let changed_value = e.target.previousElementSibling.value;
            getData.banner.banner1.h1 = changed_value; //set data to object

            $.post('http://mydata.sobujdiganta.com/data.php',{name: JSON.stringify(getData)},function(response){
                console.log(response);
            });
            
        });

        content = getData.banner.banner1.p; //get data from object
        $('#siteData_content_save_banner1_p').val(content);

        $('.siteData_content_save_banner1_p').on('click',function(e){ //should be chage button class name
            let changed_value = e.target.previousElementSibling.value;
            getData.banner.banner1.p = changed_value; //set data to object

            $.post('http://mydata.sobujdiganta.com/data.php',{name: JSON.stringify(getData)},function(response){
                console.log(response);
            });
            
        });

        content = getData.banner.banner1.hire_us; //get data from object
        $('#siteData_content_save_banner1_hire_us').val(content);

        $('.siteData_content_save_banner1_hire_us').on('click',function(e){ //should be chage button class name
            let changed_value = e.target.previousElementSibling.value;
            getData.banner.banner1.hire_us = changed_value; //set data to object

            $.post('http://mydata.sobujdiganta.com/data.php',{name: JSON.stringify(getData)},function(response){
                console.log(response);
            });
            
        });

        content = getData.banner.banner1.contact_us; //get data from object
        $('#siteData_content_save_banner1_contact_us').val(content);

        $('.siteData_content_save_banner1_contact_us').on('click',function(e){ //should be chage button class name
            let changed_value = e.target.previousElementSibling.value;
            getData.banner.banner1.contact_us = changed_value; //set data to object

            $.post('http://mydata.sobujdiganta.com/data.php',{name: JSON.stringify(getData)},function(response){
                console.log(response);
            });
            
        });

    });

    
});
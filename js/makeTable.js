// $.get('http://sas.sobujdiganta.com/getData.php', function (e) {
//     console.log(JSON.parse(e));

//     siteData = JSON.parse(e);
//     function makeTAble(key,object){
//         // console.log(object);
//         let inputField = `
//             <div class="form-control mb-3">
//                 <label for="" class="mb-3">${key}</label>
//                 <textarea type="text" class="form-control" id="${key}" value="">${object.content}</textarea>
//             </div>
//         `;

//         $('#control_form').append(inputField);
//     }

//     for (const key in siteData) {
//         if (siteData.hasOwnProperty(key)) {
//             const element = siteData[key];
    
//             if (key === 'header_logo') {
//                 $(`#${key}`).attr('src', element.content);
//                 makeTAble(key,element)
//             } else if (key === 'header_social_links') {
//                 // console.log(key, element);
//                 let social_icons_list = '';
//                 for (const slink in element) {
//                     if (element.hasOwnProperty(slink)) {
//                         const element2 = element[slink];
//                         social_icons_list += `<li><a href="${element2.link}"><i class="${element2.icon}"></i></a></li>`;
//                         // console.log(element2,social_icons_list);
//                         $('#header_social_links').html(social_icons_list);
//                     }
//                 }
    
//             } else if (key === 'banner') {
//                 // console.log(key,element);
//                 let banner_list = '';
//                 for (const banner in element) {
//                     if (element.hasOwnProperty(banner)) {
//                         const element2 = element[banner];
//                         banner_list += `
//                                 <div style="
//                                         background-image: url('${element2.image}');
//                                         background-repeat: no-repeat;
//                                         background-size: cover;
//                                     ">
//                                 <div class="overlay">
//                                     <div class="container">
//                                         <div class="row">
//                                             <div class="col-md-6 col-sm-0"></div>
//                                             <div class="col-md-6">
//                                                 <div class="banner-content">
//                                                     <h2>${element2.h2}</h2>
//                                                     <h1>${element2.h1}</h1>
//                                                     <p>
//                                                         ${element2.p}
//                                                     </p>
//                                                     <ul>
//                                                         <li><a href="${element2.hire_us}">Hire Us</a></li>
//                                                         <li><a href="${element2.contact_us}">Contact</a></li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         `;
//                         // console.log(banner_list);
//                         // $('#banner').html(banner_list);
//                     }
//                 }
//             } else {
//                 // $(`#${key}`).html(element.content);
//                 makeTAble(key,element)
//             }
//         }
//     }

//     $('.save_btn').on('click',function(){
//         for (const key in siteData) {
//             if (siteData.hasOwnProperty(key)) {
//                 const element = siteData[key];
//                 let value = $('#'+key).val();
                
//                 if(typeof value !== 'undefined'){
//                     console.log(value);
//                     siteData[key].content = value;
//                 }
//             }
//         }
//         $.post("http://sas.sobujdiganta.com/data.php",{name: JSON.stringify(siteData)},function(e){
//             console.log(e);
//         })
//     });
    
// })
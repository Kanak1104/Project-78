var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://image.shutterstock.com/image-vector/vector-graphic-illustration-grandmother-holding-260nw-1783811546.jpg" , "https://image.shutterstock.com/image-vector/father-his-cute-little-daughter-260nw-1419842672.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://png.pngtree.com/png-clipart/20190115/ourlarge/pngtree-hand-drawn-cartoon-school-day-classmate-my-sister-sent-her-sister-png-image_362628.jpg" , "https://thumbs.dreamstime.com/b/little-girl-holding-rabbit-her-arms-lovely-friendship-pet-cute-hugs-180695010.jpg"];
var names = ["Fmaily Book","Durga prasad ji Agrawal(Grandpa)", "Ganga Agrawal(Grandma)", "Anup Agrawal (Father)", "Preeti Agrawal (Mother)", "Palaq Agrawal (eldar sister)Kanak Agrawal (Me)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images [i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName =names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

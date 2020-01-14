
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include('../js/head-menu.js');
/*------------------------------------------ Fill Data ------------------------------------------*/
const gallery_images = {
  tag: 'div',
  attr:[['class','demo1 flex-container']],
  children:[
    {
      tag: 'a',
      attr:[['href','#img1']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-1.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img2']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-2.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img3']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-3.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img4']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-4.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img5']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-5.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img6']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-6.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img7']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-7.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img8']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-8.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img9']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-9.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img10']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-10.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img11']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-11.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img12']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-12.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img13']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-13.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img14']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-14.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img15']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-15.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img16']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-16.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img17']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-17.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img18']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-18.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img19']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-19.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img20']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-20.jpg'],], },],
    },
    {
      tag: 'a',
      attr:[['href','#img21']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-21.jpg'],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img1'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-1.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img2'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-2.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img3'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-3.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img4'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-4.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img5'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-5.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img6'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-6.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img7'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-7.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img8'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-8.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img9'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-9.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img10'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-10.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img11'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-11.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img12'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-12.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img13'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-13.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img14'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-14.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img15'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-15.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img16'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-16.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img17'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-17.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img18'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-18.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img19'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-19.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img20'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-20.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
    {
      tag: 'figure',
      attr:[['id','img21'], ['class','lbox flip']],
      children:[{ tag: 'img', attr:[['src', '../img/gallery/gallery-21.jpg'],], },{ tag: 'a', attr:[['href', ''],], },],
    },
  ],
};
function build ( data ) {
  if ( typeof data ==='string') {
    return document.createTextNode( data );
  } else if ( data && data.tag ) {
    const tag = document.createElement( data.tag );
    if ( data.attr instanceof Array ) {
      data.attr.map( ([key, value]) => tag.setAttribute(key, value) );
    }
    if ( data.children instanceof Array ) {
      data.children.map( child => tag.appendChild( build( child ) ) );
    }
    return tag;
  } else {
    return document.createTextNode('');
  }
}
document.getElementById('block-gallery').prepend(build(gallery_images));

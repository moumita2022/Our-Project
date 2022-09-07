import React from "react";
import CustomImage from "./CustomImage";

export default function HeroSection() {
<<<<<<< HEAD
  const images = [
    "/img/gallery/1.jpg",
    "/img/gallery/2.jpg",
    "/img/gallery/3.jpg",
    "/img/gallery/4.jpg",
    "/img/gallery/5.jpg",
    "/img/gallery/6.jpg",
    "/img/gallery/7.jpg",
    "/img/gallery/8.jpg",
    "/img/gallery/9.jpg",
  ]
  return (
    <div className='section hero'>
      <div className='col typography'>
        <h1 className='title'>What Are We About</h1>
<p className='info'>FoodieHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine.And our service is absolutely free.So start exploring now.</p>
<button className='btn'>explore now</button>
      </div>
      <div className='col gallery'>
        {images.map((src,index) => (<CustomImage key={index}imgSrc={src} pt={'90%'} />))}
{/*<CustomImage pt={"85%"} />
=======
	const images = [
		"/img/gallery/1.jpg",
		"/img/gallery/2.jpg",
		"/img/gallery/3.jpg",
		"/img/gallery/4.jpg",
		"/img/gallery/5.jpg",
		"/img/gallery/6.jpg",
		"/img/gallery/7.jpg",
		"/img/gallery/8.jpg",
		"/img/gallery/9.jpg",
		"/img/gallery/10.jpg",
	];
	return (
		<div className="section hero">
			<div className="col typography">
				<h1 className="title">What Are We About</h1>
				<p className="info">
					FoodieHub is a place where you can please your soul and tummy with
					delicious food recepies of all cuisine.And our service is absolutely
					free.So start exploring now.
				</p>
				<button className="btn">explore now</button>
			</div>
			<div className="col gallery">
				{images.map((src, index) => (
					<CustomImage key={index} imgSrc={src} pt={"90%"} />
				))}
				{/*<CustomImage pt={"85%"} />
>>>>>>> 5400700 (in progress)
 <CustomImage pt={"85%"} />
<CustomImage pt={"85%"} />
<CustomImage pt={"85%"} />
<CustomImage pt={"85%"} />
<CustomImage pt={"85%"} />
<CustomImage pt={"85%"} />
<CustomImage pt={"85%"} />
<CustomImage pt={"85%"} /> */}
			</div>
		</div>
	);
}

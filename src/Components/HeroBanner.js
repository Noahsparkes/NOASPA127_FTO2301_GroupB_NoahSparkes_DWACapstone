import React, { useEffect, useState } from 'react';

const images = [
  'https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png',
  'https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg',
  'https://content.production.cdn.art19.com/images/2e/ab/54/9a/2eab549a-c1c6-4674-a57a-8b85e67d405e/f3c68e8913738d8d31c3b97434e27ac44619b273972960ed9ba7b2b6da610f6cfdd30bd96f73d4418475b081b3cf0cdbddc49799f0b3d11d3d37c77e6b13529b.png',
  'https://content.production.cdn.art19.com/images/76/cf/36/3f/76cf363f-bf38-4490-80f9-ad890df8b2a2/a5cb31de2d0c42284b43fb29591fd9388e41e92f5ff2eac87082ee249f2ad77995f457595fc91e784fa491f7770e4a273a6423b81ac33002ad6e49247a3ab915.png',
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          className={index === currentIndex ? 'active' : ''}
          src={imageUrl}
          alt=""
        />
      ))}
    </div>
  );
};

export default HeroBanner;

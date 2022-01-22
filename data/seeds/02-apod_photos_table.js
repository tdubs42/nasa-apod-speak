const photos = [
  {
    apod_photo_id: 0,
    apod_photo_copyright: 'Elena Pinna',
    apod_photo_date_posted: '2022-01-22',
    apod_photo_explanation: 'On Monday, January\'s Full Moon rose as the Sun' +
                            ' set. Spotted near the eastern horizon, its warm hues are seen in this photo taken near Cagliari, capital city of the Italian island of Sardinia. Of course the familiar patterns of light and dark across the Moon\'s nearside are created by bright rugged highlands and dark smooth lunar maria. Traditionally the patterns are seen as pareidolia, giving the visual illusion of a human face like the Man in the Moon, or familiar animal like the Moon rabbit. But for a moment the swarming murmuration, also known as a flock of starlings, frozen in the snapshot\'s field of view lends another pareidolic element to the scene. Some see the graceful figure of a dancer enchanted by moonlight.',
    apod_photo_media_type: 'image',
    apod_photo_src: 'https://apod.nasa.gov/apod/image/2201/IMG_4039copia2_2048.jpg',
    apod_photo_title: 'The Full Moon and the Dancer'
  },
  {
    apod_photo_id: 1,
    apod_photo_date_posted: '2022-01-21',
    apod_photo_explanation: 'Laser guide stars and adaptive optics sharpened' +
                            ' this stunning ground-based image of stellar jets from the Gemini South Observatory, Chilean Andes, planet Earth. These twin outflows of MHO 2147 are from a young star in formation. It lies toward the central Milky Way and the boundary of the constellations Sagittarius and Ophiuchus at an estimated distance of some 10,000 light-years. At center, the star itself is obscured by a dense region of cold dust. But the infrared image still traces the sinuous jets across a frame that would span about 5 light-years at the system\'s estimated distance. Driven outward by the young rotating star, the apparent wandering direction of the jets is likely due to precession. Part of a multiple star system, the young star\'s rotational axis would slowly precess or wobble like a top under the gravitation influence of its nearby companions.',
    apod_photo_media_type: 'image',
    apod_photo_src: "https://apod.nasa.gov/apod/image/2201/noirlab2204a.jpg",
    apod_photo_title: 'Young Star Jet MHO 2147'
  },
  {
    apod_photo_id: 2,
    apod_photo_copyright: 'Mark Carter',
    apod_photo_date_posted: '2022-01-20',
    apod_photo_explanation: 'Hot, young stars and cosmic pillars of gas and dust seem to crowd into NGC 7822. At the edge of a giant molecular cloud toward the northern constellation Cepheus, the glowing star forming region lies about 3,000 light-years away. Within the nebula, bright edges and dark shapes stand out in this colorful telescopic skyscape. The image includes data from narrowband filters, mapping emission from atomic oxygen, hydrogen, and sulfur into blue, green, and red hues. The emission line and color combination has become well-known as the Hubble palette.  The atomic emission is powered by energetic radiation from the central hot stars. Their powerful winds and radiation sculpt and erode the denser pillar shapes and clear out a characteristic cavity light-years across the center of the natal cloud. Stars could still be forming inside the pillars by gravitational collapse but as the pillars are eroded away, any forming stars will ultimately be cutoff from their reservoir of star stuff. This field of view spans about 40 light-years at the estimated distance of NGC 7822.',
    apod_photo_media_type: 'image',
    apod_photo_src: "https://apod.nasa.gov/apod/image/2201/IMG_9447.jpg",
    apod_photo_title: 'NGC 7822 in Cepheus'
  },
  {
    apod_photo_id: 3,
    apod_photo_copyright: 'R. GendlerR. Croman',
    apod_photo_date_posted: '2022-01-19',
    apod_photo_explanation: 'The most distant object easily visible to the unaided eye is M31, the great Andromeda Galaxy. Even at some two and a half million light-years distant, this immense spiral galaxy -- spanning over 200,000 light years -- is visible, although as a faint, nebulous cloud in the constellation Andromeda. In contrast, a bright yellow nucleus, dark winding dust lanes, and expansive spiral arms dotted with blue star clusters and red nebulae, are recorded in this stunning telescopic image which combines data from orbiting Hubble with ground-based images from Subaru and Mayall. In only about 5 billion years, the Andromeda galaxy may be even easier to see -- as it will likely span the entire night sky -- just before it merges with our Milky Way Galaxy.',
    apod_photo_media_type: 'image',
    apod_photo_src: "https://apod.nasa.gov/apod/image/2201/M31_HstSubaruGendler_5000.jpg",
    apod_photo_title: 'M31: The Andromeda Galaxy'
  },
  {
    apod_photo_id: 4,
    apod_photo_copyright: 'Lucy Yunxi Hu',
    apod_photo_date_posted: '2022-01-18',
    apod_photo_explanation: 'This is a sky filled with glowing icons. On the far left is the familiar constellation of Orion, divided by its iconic three-aligned belt stars and featuring the famous Orion Nebula, both partly encircled by Barnard\'s Loop. Just left of center in the featured image is the brightest star in the night: Sirius. Arching across the image center is the central band of our Milky Way Galaxy. On the far right, near the top, are the two brightest satellite galaxies of the Milky Way: the Large Magellanic Cloud (LMC), and the Small Magellanic Cloud (SMC). Also on the far right -- just above the cloudy horizon -- is the constellation of Crux, complete with the four stars that make the iconic Southern Cross. The featured image is a composite of 18 consecutive exposures taken by the same camera and from the same location in eastern Australia during the last days of last year.  In the foreground, picturesque basalt columns of the Bombo Quarry part to reveal the vast Pacific Ocean.',
    apod_photo_media_type: 'image',
    apod_photo_src: "https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_7441.jpg",
    apod_photo_title: 'From Orion to the Southern Cross'
  }
]

exports.seeds = knex => knex('apod_photos').insert(photos)
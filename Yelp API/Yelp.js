const apiKey = 'qQND1azf4D6p1_bR1vHKhK-vNtzea6DZjzGIi7zdxQdZ4U2Ghdf3lnJbvKMkhnTAwZC0nYgUOwbnWTv6BLqhoF8w7iXDrXlp9pBlnCTFTShxRG7peb1CLF1dB0sNX3Yx';

export let Yelp = {

   search(term, location,sortBy) {

    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,

      {
        headers:
        {
          Authorization: `Bearer ${apiKey}`
        }
      }



    ).then(response => {
      return response.json();
    }
  ).then(jsonResponse => {
    if (jsonResponse.businesses) {

      return jsonResponse.businesses.map(business => {
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name ,
          address: business.location.address1 ,
          city: business.location.city,
          state: business.location.state ,
          zipCode: business.location.zip_code ,
          category: business.category ,
          rating: business.rating ,
          reviewCount: business.review_count
        }
      });
  }
  })
  }

}

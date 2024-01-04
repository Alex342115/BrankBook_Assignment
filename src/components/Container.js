import "./container.css";
import Card from "./Card";
export default function Container() {
  const itemReviews = [
    {
      id: 1,
      photo:
        "https://s3-alpha-sig.figma.com/img/a8bd/c7a2/e5ff1d53eb2b37970dc637ed7c7e4377?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VpNbVN27vat8PPR7-B94WOK3VpNDUCKpkQGwi3RAFZtNkLAQ-5J5SKwMYZMm4Y0ydnckrICih70hzRyQ1RAiMA1T~VmF8r-tmMFVVRYlw11qIeOP1i4tksd6lRIq04nXHbKOYv6GSOpkDfDiVkVVONYQ0AsHItUA0EJ2OHI7DxSpWXQmcstW5BNgw4KDjPvzvz3Z36xjjZO-xNcu7MwebXkPKQuLWh~U2Rq0JZ2Adp~jQH8VreQfUddF3KBrHBR02g0IIxwE~lza8AmCFmCFFbrVbjz8uh12KWTllcrjO2fbQutw4SCkzrQLwDQiSPNF1i~PsDRagJ4BBaDR~Gg08w__",
      itemName: "ITC Aashirvaad Atta",
      itemDesc: "5kg",
      itemRating: "4",
      title: "Amazing Product",
      titleDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      itemphoto: [
        "https://s3-alpha-sig.figma.com/img/3a78/bfe8/4367d5f47829695e17d65c4b08285168?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5aLrIi5qLHQSstJ~nmkUQoZKHPNII3PIug-KbPpncAfjCmF35h4YFOgNb02LBREfOhz-dbYl3ZfTJQMiQcCVkonixiy85oSR0zRGNOHCSxh6nETZhqsZgSX1Bhaym37vBAnYzkveWOkDEKISFXO4VaT7XVRgdKct-JqggidYxQaYB~VqKQaIuHLXKw659xowyF4~5qyvPu7ua6ytyxKF1EpmueySuk1RbRP1A97aAY8NYj1gsTL0LWhopjRp3HEcaq8xIACDsPS4-mhiXfAaYyD3paXX1lZ-IJsqXkudjs3ehJBYwl07prhqA-Pi07ExS54OLLxesoZewa6YyTpfQ__",
        "https://s3-alpha-sig.figma.com/img/3a78/bfe8/4367d5f47829695e17d65c4b08285168?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5aLrIi5qLHQSstJ~nmkUQoZKHPNII3PIug-KbPpncAfjCmF35h4YFOgNb02LBREfOhz-dbYl3ZfTJQMiQcCVkonixiy85oSR0zRGNOHCSxh6nETZhqsZgSX1Bhaym37vBAnYzkveWOkDEKISFXO4VaT7XVRgdKct-JqggidYxQaYB~VqKQaIuHLXKw659xowyF4~5qyvPu7ua6ytyxKF1EpmueySuk1RbRP1A97aAY8NYj1gsTL0LWhopjRp3HEcaq8xIACDsPS4-mhiXfAaYyD3paXX1lZ-IJsqXkudjs3ehJBYwl07prhqA-Pi07ExS54OLLxesoZewa6YyTpfQ__",
        "https://s3-alpha-sig.figma.com/img/3a78/bfe8/4367d5f47829695e17d65c4b08285168?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5aLrIi5qLHQSstJ~nmkUQoZKHPNII3PIug-KbPpncAfjCmF35h4YFOgNb02LBREfOhz-dbYl3ZfTJQMiQcCVkonixiy85oSR0zRGNOHCSxh6nETZhqsZgSX1Bhaym37vBAnYzkveWOkDEKISFXO4VaT7XVRgdKct-JqggidYxQaYB~VqKQaIuHLXKw659xowyF4~5qyvPu7ua6ytyxKF1EpmueySuk1RbRP1A97aAY8NYj1gsTL0LWhopjRp3HEcaq8xIACDsPS4-mhiXfAaYyD3paXX1lZ-IJsqXkudjs3ehJBYwl07prhqA-Pi07ExS54OLLxesoZewa6YyTpfQ__",
        "https://s3-alpha-sig.figma.com/img/3a78/bfe8/4367d5f47829695e17d65c4b08285168?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5aLrIi5qLHQSstJ~nmkUQoZKHPNII3PIug-KbPpncAfjCmF35h4YFOgNb02LBREfOhz-dbYl3ZfTJQMiQcCVkonixiy85oSR0zRGNOHCSxh6nETZhqsZgSX1Bhaym37vBAnYzkveWOkDEKISFXO4VaT7XVRgdKct-JqggidYxQaYB~VqKQaIuHLXKw659xowyF4~5qyvPu7ua6ytyxKF1EpmueySuk1RbRP1A97aAY8NYj1gsTL0LWhopjRp3HEcaq8xIACDsPS4-mhiXfAaYyD3paXX1lZ-IJsqXkudjs3ehJBYwl07prhqA-Pi07ExS54OLLxesoZewa6YyTpfQ__",
      ],
      reviewDate: "Jan 05 2024",
    },
    {
      id: 2,
      photo:
        "https://s3-alpha-sig.figma.com/img/bd9b/30fb/ee4f8d0e33d952f529910779f0dc28dd?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W~B4WGCZ5AsnGidnRGnN7cpw6UBHYpcEr5-mKoSG4omWS-ChHUeXu6IzXZyDwtKv78rMPvKmaTm56PvWNiJc8YRmaz5rXfwptC62uzE-WrDgWo4P~K9YqihqtjwA9jpLkWPdgFzhfKV493D0fuEiLliywKz0F8aHznlNO-ljQFbt2j~l7sanb9WbUO6ELmedWYq9N0TaEYikz9Sgw2ti-1-zPiJ9PwPlCb1igAcYnsaaMw8cXLAP6Jy-pYXPAOidpF7l6NKs7nciwUvpfzdVNUPqi7VZZSYDBRs7pZ3UP3sfuL0orUFuuEGOXynKTfjeUBFDetO73ccKc6~5HiWBkg__",
      itemName: "Sharma Fashion Wear",
      itemDesc: "Clothes Store & Designer at Rajeev Market, New Delhi, India",
      itemRating: "4",
      title: "Good Seller & Awesome Products",
      titleDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      itemphoto: [
        "https://s3-alpha-sig.figma.com/img/fa6e/d5e1/2d81b1b277eb5d4d125bfaf45a2e9348?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XY5PUgAPXibyGMDeqfu8kjj~vHVvJ6HGcnE6gDz-IV-8iGCMWy7~Skb30yZpNmWDO~h3JeqnxADa~F7EcYkVBa8AbULMQ8vBsN57bmoPaYLBmVAYrEjTp9giPyY30cYOZpWyTxFvMWdTFSjWzqVQe5q-cWf7lFnCAndlkG0LVJpkCbn1jtXhFikb0cpjgVvqYsCg3Dv2tesftJIuPaJBA5FuEDE9gBuialRC~I5PjiVkJXafRGO7ALMlzYJQmbuapgw1jcjhTLzHgxH-MxPw3kCQFx0p~h0WHWPJaNTMCmk1ZMNgEqr~eXcd-QR8zj49QTWrkcke7j-fyQNoj0rLGw__",
        "https://s3-alpha-sig.figma.com/img/fa6e/d5e1/2d81b1b277eb5d4d125bfaf45a2e9348?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XY5PUgAPXibyGMDeqfu8kjj~vHVvJ6HGcnE6gDz-IV-8iGCMWy7~Skb30yZpNmWDO~h3JeqnxADa~F7EcYkVBa8AbULMQ8vBsN57bmoPaYLBmVAYrEjTp9giPyY30cYOZpWyTxFvMWdTFSjWzqVQe5q-cWf7lFnCAndlkG0LVJpkCbn1jtXhFikb0cpjgVvqYsCg3Dv2tesftJIuPaJBA5FuEDE9gBuialRC~I5PjiVkJXafRGO7ALMlzYJQmbuapgw1jcjhTLzHgxH-MxPw3kCQFx0p~h0WHWPJaNTMCmk1ZMNgEqr~eXcd-QR8zj49QTWrkcke7j-fyQNoj0rLGw__",
        "https://s3-alpha-sig.figma.com/img/fa6e/d5e1/2d81b1b277eb5d4d125bfaf45a2e9348?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XY5PUgAPXibyGMDeqfu8kjj~vHVvJ6HGcnE6gDz-IV-8iGCMWy7~Skb30yZpNmWDO~h3JeqnxADa~F7EcYkVBa8AbULMQ8vBsN57bmoPaYLBmVAYrEjTp9giPyY30cYOZpWyTxFvMWdTFSjWzqVQe5q-cWf7lFnCAndlkG0LVJpkCbn1jtXhFikb0cpjgVvqYsCg3Dv2tesftJIuPaJBA5FuEDE9gBuialRC~I5PjiVkJXafRGO7ALMlzYJQmbuapgw1jcjhTLzHgxH-MxPw3kCQFx0p~h0WHWPJaNTMCmk1ZMNgEqr~eXcd-QR8zj49QTWrkcke7j-fyQNoj0rLGw__",
        "https://s3-alpha-sig.figma.com/img/fa6e/d5e1/2d81b1b277eb5d4d125bfaf45a2e9348?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XY5PUgAPXibyGMDeqfu8kjj~vHVvJ6HGcnE6gDz-IV-8iGCMWy7~Skb30yZpNmWDO~h3JeqnxADa~F7EcYkVBa8AbULMQ8vBsN57bmoPaYLBmVAYrEjTp9giPyY30cYOZpWyTxFvMWdTFSjWzqVQe5q-cWf7lFnCAndlkG0LVJpkCbn1jtXhFikb0cpjgVvqYsCg3Dv2tesftJIuPaJBA5FuEDE9gBuialRC~I5PjiVkJXafRGO7ALMlzYJQmbuapgw1jcjhTLzHgxH-MxPw3kCQFx0p~h0WHWPJaNTMCmk1ZMNgEqr~eXcd-QR8zj49QTWrkcke7j-fyQNoj0rLGw__",
      ],
      reviewDate: "Jan 04 2024",
    },
    {
      id: 3,
      photo:
        "https://s3-alpha-sig.figma.com/img/a8bd/c7a2/e5ff1d53eb2b37970dc637ed7c7e4377?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VpNbVN27vat8PPR7-B94WOK3VpNDUCKpkQGwi3RAFZtNkLAQ-5J5SKwMYZMm4Y0ydnckrICih70hzRyQ1RAiMA1T~VmF8r-tmMFVVRYlw11qIeOP1i4tksd6lRIq04nXHbKOYv6GSOpkDfDiVkVVONYQ0AsHItUA0EJ2OHI7DxSpWXQmcstW5BNgw4KDjPvzvz3Z36xjjZO-xNcu7MwebXkPKQuLWh~U2Rq0JZ2Adp~jQH8VreQfUddF3KBrHBR02g0IIxwE~lza8AmCFmCFFbrVbjz8uh12KWTllcrjO2fbQutw4SCkzrQLwDQiSPNF1i~PsDRagJ4BBaDR~Gg08w__",
      itemName: "ITC Aashirvaad Atta",
      itemDesc: "5kg",
      itemRating: "4",
      title: "Amazing Product",
      titleDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      itemphoto: [
        "https://s3-alpha-sig.figma.com/img/3a78/bfe8/4367d5f47829695e17d65c4b08285168?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5aLrIi5qLHQSstJ~nmkUQoZKHPNII3PIug-KbPpncAfjCmF35h4YFOgNb02LBREfOhz-dbYl3ZfTJQMiQcCVkonixiy85oSR0zRGNOHCSxh6nETZhqsZgSX1Bhaym37vBAnYzkveWOkDEKISFXO4VaT7XVRgdKct-JqggidYxQaYB~VqKQaIuHLXKw659xowyF4~5qyvPu7ua6ytyxKF1EpmueySuk1RbRP1A97aAY8NYj1gsTL0LWhopjRp3HEcaq8xIACDsPS4-mhiXfAaYyD3paXX1lZ-IJsqXkudjs3ehJBYwl07prhqA-Pi07ExS54OLLxesoZewa6YyTpfQ__",
        "https://s3-alpha-sig.figma.com/img/3a78/bfe8/4367d5f47829695e17d65c4b08285168?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5aLrIi5qLHQSstJ~nmkUQoZKHPNII3PIug-KbPpncAfjCmF35h4YFOgNb02LBREfOhz-dbYl3ZfTJQMiQcCVkonixiy85oSR0zRGNOHCSxh6nETZhqsZgSX1Bhaym37vBAnYzkveWOkDEKISFXO4VaT7XVRgdKct-JqggidYxQaYB~VqKQaIuHLXKw659xowyF4~5qyvPu7ua6ytyxKF1EpmueySuk1RbRP1A97aAY8NYj1gsTL0LWhopjRp3HEcaq8xIACDsPS4-mhiXfAaYyD3paXX1lZ-IJsqXkudjs3ehJBYwl07prhqA-Pi07ExS54OLLxesoZewa6YyTpfQ__",
        "https://s3-alpha-sig.figma.com/img/3a78/bfe8/4367d5f47829695e17d65c4b08285168?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5aLrIi5qLHQSstJ~nmkUQoZKHPNII3PIug-KbPpncAfjCmF35h4YFOgNb02LBREfOhz-dbYl3ZfTJQMiQcCVkonixiy85oSR0zRGNOHCSxh6nETZhqsZgSX1Bhaym37vBAnYzkveWOkDEKISFXO4VaT7XVRgdKct-JqggidYxQaYB~VqKQaIuHLXKw659xowyF4~5qyvPu7ua6ytyxKF1EpmueySuk1RbRP1A97aAY8NYj1gsTL0LWhopjRp3HEcaq8xIACDsPS4-mhiXfAaYyD3paXX1lZ-IJsqXkudjs3ehJBYwl07prhqA-Pi07ExS54OLLxesoZewa6YyTpfQ__",
      ],
      reviewDate: "Dec 12 2023",
    },
  ];

  const reviewStats = itemReviews.map(
    (itemReview) => (
      <Card
        key={itemReview?.id}
        photo={itemReview?.photo}
        itemName={itemReview?.itemName}
        itemDesc={itemReview?.itemDesc}
        itemRating={itemReview?.itemRating}
        title={itemReview?.title}
        titleDesc={itemReview?.titleDesc}
        itemphoto={itemReview?.itemphoto}
        reviewDate={itemReview?.reviewDate}
      />
    )
  );
  console.log(reviewStats);

  return (
    <div className="container">
      <h1>My Reviews</h1>
      {/* hello */}
      {reviewStats}
    </div>
  );
}

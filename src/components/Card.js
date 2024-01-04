import "./Card.css";
export default function Cards(props) {
  const {
    photo,
    itemName,
    itemDesc,
    itemRating,
    title,
    titleDesc,
    itemphoto,
    reviewDate,
  } = props;

  // Review Date Calclation
  const reviewDated = reviewDate.split(" ");
  const currDate = Date().split(" ").slice(1, 4);
  var reviewResult;
  if (currDate[2] == reviewDated[2] && currDate[0] == reviewDated[0]) {
    if (currDate[1] == reviewDated[1]) {
      reviewResult = "Today";
    } else if (currDate[1] - 1 == reviewDated[1]) {
      reviewResult = "Yesterday";
    } else {
      reviewResult = reviewDate;
    }
  } else {
    reviewResult = reviewDate;
  }

  // Raring Calculation
  const restStar = 5 - itemRating;
  const positiveStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clip-path="clip0_1_2275">
        <path
          d="M19.5662 9.10159C19.9599 8.71793 20.0988 8.15485 19.929 7.63142C19.7588 7.108 19.3155 6.73435 18.7708 6.65505L13.9282 5.95141C13.722 5.92137 13.5438 5.79202 13.4517 5.60499L11.2867 1.21733C11.0436 0.724336 10.5502 0.417969 10.0003 0.417969C9.45086 0.417969 8.95747 0.724336 8.71437 1.21733L6.54897 5.60539C6.45686 5.79242 6.27825 5.92177 6.072 5.95181L1.22939 6.65545C0.685139 6.73435 0.241407 7.1084 0.0712024 7.63182C-0.0986013 8.15525 0.0403654 8.71833 0.434038 9.10199L3.93784 12.5173C4.08722 12.6631 4.1557 12.8729 4.12046 13.078L3.29387 17.9005C3.22058 18.3251 3.33192 18.738 3.60664 19.0635C4.03356 19.571 4.77885 19.7255 5.37477 19.4124L9.70556 17.1352C9.88658 17.0403 10.1145 17.0411 10.2951 17.1352L14.6263 19.4124C14.8369 19.5233 15.0616 19.5794 15.2935 19.5794C15.7168 19.5794 16.1181 19.3911 16.394 19.0635C16.6691 18.738 16.7801 18.3243 16.7068 17.9005L15.8798 13.078C15.8445 12.8725 15.913 12.6631 16.0624 12.5173L19.5662 9.10159Z"
          fill="#FFC01D"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2275">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  const negativeStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clip-path="url(#clip0_1_2283)">
        <path
          d="M19.5662 9.10159C19.9599 8.71793 20.0988 8.15485 19.929 7.63142C19.7588 7.108 19.3155 6.73435 18.7708 6.65505L13.9282 5.95141C13.722 5.92137 13.5438 5.79202 13.4517 5.60499L11.2867 1.21733C11.0436 0.724336 10.5502 0.417969 10.0003 0.417969C9.45086 0.417969 8.95747 0.724336 8.71437 1.21733L6.54897 5.60539C6.45686 5.79242 6.27825 5.92177 6.072 5.95181L1.22939 6.65545C0.685139 6.73435 0.241407 7.1084 0.0712024 7.63182C-0.0986013 8.15525 0.0403654 8.71833 0.434038 9.10199L3.93784 12.5173C4.08722 12.6631 4.1557 12.8729 4.12046 13.078L3.29387 17.9005C3.22058 18.3251 3.33192 18.738 3.60664 19.0635C4.03356 19.571 4.77885 19.7255 5.37477 19.4124L9.70556 17.1352C9.88658 17.0403 10.1145 17.0411 10.2951 17.1352L14.6263 19.4124C14.8369 19.5233 15.0616 19.5794 15.2935 19.5794C15.7168 19.5794 16.1181 19.3911 16.394 19.0635C16.6691 18.738 16.7801 18.3243 16.7068 17.9005L15.8798 13.078C15.8445 12.8725 15.913 12.6631 16.0624 12.5173L19.5662 9.10159Z"
          fill="#B3B3B3"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2283">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  var ratingResult = [];
  for (let i = 0; i < itemRating; i++) {
    ratingResult.push(positiveStar);
  }
  for (let i = 0; i < restStar; i++) {
    ratingResult.push(negativeStar);
  }

  return (
    <div className="cards">
      <div className="item-photo">
        <img src={photo} alt="item" />
      </div>
      <div className="review-stats">
        <div className="review-title">
          <div className="review-item-name">
            <h3>{itemName}</h3>
            <p>{itemDesc}</p>
            <div className="rating">{ratingResult}</div>
          </div>
          <div className="review-item-date">
            Reviewed
            <p>{reviewResult}</p>
          </div>
        </div>
        <div className="review-desc">
          <h3>{title}</h3>
          <p>{titleDesc}</p>
          <div className="review-photo">
            {itemphoto.map((item) => (
              <img src={item} alt="item" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

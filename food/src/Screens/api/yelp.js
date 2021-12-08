import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer TRp2_Ry6O--pdYare8MebDs2rorM4z4GXx-Chwg7GDRhKyRvlVE3xaxq2iOFwP26uNdMkEt6E1dwpXU3vt2aTWHcum9X7rsPGtGg32Kh21wgyiBRfLk-2irwt5WtYXYx",
  },
});

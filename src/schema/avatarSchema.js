import * as Yup from 'yup';

export const avatarSchema = Yup.object().shape({
  imageUrl: Yup.string()
    .url('Invalid URL format')
    .matches(
      /\.(jpeg|jpg|gif|png|bmp|svg|webp|tiff)$/,
      'URL must be a valid image format (jpeg, jpg, gif, png, bmp, svg, webp, tiff)',
    ),
});

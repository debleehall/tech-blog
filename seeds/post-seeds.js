const { Post } = require("../models");

const postData = [
  {
    title: "Post Test 1",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 1,
  },
  {
    title: "Post Test 2",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 1,
  },
  {
    title: "Post Test 3",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 1,
  },
  {
    title: "Post Test 4",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 1,
  },
  {
    title: "Post Test 5",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 2,
  },
  {
    title: "Post Test 6",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 3,
  },
  {
    title: "Post Test 7",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 2,
  },
  {
    title: "Post Test 8",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 2,
  },
  {
    title: "Post Test 9",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 3,
  },
  {
    title: "Post Test 10",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
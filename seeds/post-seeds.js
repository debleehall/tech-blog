const { Post } = require("../models");

const postData = [
  {
    title: "Run Buddy",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 1,
    group_id: 1,
  },
  {
    title: "Zookeepr",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 1,
    group_id: 2,
  },
  {
    title: "Zookeepr",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 1,
    group_id: 3,
  },
  {
    title: "Zookeepr",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 1,
    group_id: 4,
  },
  {
    title: "Zookeepr",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 2,
    group_id: 2,
  },
  {
    title: "Zookeepr",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 3,
    group_id: 1,
  },
  {
    title: "Zookeepr",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 2,
    group_id: 4,
  },
  {
    title: "Zookeepr",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 2,
    group_id: 3,
  },
  {
    title: "Zookeepr",
    post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 3,
    group_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
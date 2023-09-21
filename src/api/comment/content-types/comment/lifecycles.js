module.exports = {
  async beforeUpdate(event) {
    const { params } = event;
    const { where, data } = params;
    const currentData = await strapi.entityService.findOne("api::comment.comment", where.id);

    if (data.addToPost === true && currentData.addToPost === false) {
      const { content, title } = data;
      const a = await strapi.entityService.create("api::post.post", {
        data: {
          content,
          title,
          chinese: true
        }
      })

      console.log(a)
    }
  },
};
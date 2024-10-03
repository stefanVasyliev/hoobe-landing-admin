/**
 * article controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::article.article", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db.query("api::article.article").findOne({
      where: { slug: id },
      populate: true,
    });
    const cleanTags = entity.tags.map((tag) => {
      return { tagId: tag.tagId, tagName: tag.tagName };
    });
    const sanitizedEntity = await this.sanitizeOutput({ ...entity, tags: cleanTags }, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));

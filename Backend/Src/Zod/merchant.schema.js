import zod from "zod";

const merchantSchema = zod.object({
  business: zod.string().min(1),
  brandName: zod.string().min(1)
});

export {merchantSchema}
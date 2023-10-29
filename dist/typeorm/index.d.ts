import { Post } from './post.entity';
import { Dead } from './dead.entity';
declare const entities: (typeof Post | typeof Dead)[];
export { Post };
export { Dead };
export default entities;

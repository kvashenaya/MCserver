import { Post } from './post.entity';
import { Dead } from './dead.entity';
import { Item } from './item.entity';
declare const entities: (typeof Post | typeof Item | typeof Dead)[];
export { Post };
export { Dead };
export { Item };
export default entities;

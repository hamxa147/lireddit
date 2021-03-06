import { __prod__ } from "./entities/constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core"
import path from "path";

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities: [Post],
    dbName: "lireddit",
    user: 'postgres',
    password: 'postgres',
    type: "postgresql",
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];


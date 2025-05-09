
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model payments
 * 
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model referral_orders
 * 
 */
export type referral_orders = $Result.DefaultSelection<Prisma.$referral_ordersPayload>
/**
 * Model referrals
 * 
 */
export type referrals = $Result.DefaultSelection<Prisma.$referralsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProductStatus: {
  active: 'active',
  inactive: 'inactive',
  archived: 'archived'
};

export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus]


export const OrderStatus: {
  pending: 'pending',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const Role: {
  admin: 'admin',
  user: 'user'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  active: 'active',
  inactive: 'inactive'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

}

export type ProductStatus = $Enums.ProductStatus

export const ProductStatus: typeof $Enums.ProductStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referral_orders`: Exposes CRUD operations for the **referral_orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referral_orders
    * const referral_orders = await prisma.referral_orders.findMany()
    * ```
    */
  get referral_orders(): Prisma.referral_ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referrals`: Exposes CRUD operations for the **referrals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referrals
    * const referrals = await prisma.referrals.findMany()
    * ```
    */
  get referrals(): Prisma.referralsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Product: 'Product',
    User: 'User',
    orders: 'orders',
    payments: 'payments',
    referral_orders: 'referral_orders',
    referrals: 'referrals'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "product" | "user" | "orders" | "payments" | "referral_orders" | "referrals"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      referral_orders: {
        payload: Prisma.$referral_ordersPayload<ExtArgs>
        fields: Prisma.referral_ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.referral_ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.referral_ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_ordersPayload>
          }
          findFirst: {
            args: Prisma.referral_ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.referral_ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_ordersPayload>
          }
          findMany: {
            args: Prisma.referral_ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_ordersPayload>[]
          }
          create: {
            args: Prisma.referral_ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_ordersPayload>
          }
          createMany: {
            args: Prisma.referral_ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.referral_ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_ordersPayload>[]
          }
          delete: {
            args: Prisma.referral_ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_ordersPayload>
          }
          update: {
            args: Prisma.referral_ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_ordersPayload>
          }
          deleteMany: {
            args: Prisma.referral_ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.referral_ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.referral_ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_ordersPayload>[]
          }
          upsert: {
            args: Prisma.referral_ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_ordersPayload>
          }
          aggregate: {
            args: Prisma.Referral_ordersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral_orders>
          }
          groupBy: {
            args: Prisma.referral_ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Referral_ordersGroupByOutputType>[]
          }
          count: {
            args: Prisma.referral_ordersCountArgs<ExtArgs>
            result: $Utils.Optional<Referral_ordersCountAggregateOutputType> | number
          }
        }
      }
      referrals: {
        payload: Prisma.$referralsPayload<ExtArgs>
        fields: Prisma.referralsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.referralsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.referralsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralsPayload>
          }
          findFirst: {
            args: Prisma.referralsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.referralsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralsPayload>
          }
          findMany: {
            args: Prisma.referralsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralsPayload>[]
          }
          create: {
            args: Prisma.referralsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralsPayload>
          }
          createMany: {
            args: Prisma.referralsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.referralsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralsPayload>[]
          }
          delete: {
            args: Prisma.referralsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralsPayload>
          }
          update: {
            args: Prisma.referralsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralsPayload>
          }
          deleteMany: {
            args: Prisma.referralsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.referralsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.referralsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralsPayload>[]
          }
          upsert: {
            args: Prisma.referralsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralsPayload>
          }
          aggregate: {
            args: Prisma.ReferralsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferrals>
          }
          groupBy: {
            args: Prisma.referralsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralsGroupByOutputType>[]
          }
          count: {
            args: Prisma.referralsCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit
    user?: UserOmit
    orders?: ordersOmit
    payments?: paymentsOmit
    referral_orders?: referral_ordersOmit
    referrals?: referralsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    orders: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ProductCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    referral_orders: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral_orders?: boolean | OrdersCountOutputTypeCountReferral_ordersArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountReferral_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referral_ordersWhereInput
  }


  /**
   * Count Type ReferralsCountOutputType
   */

  export type ReferralsCountOutputType = {
    referral_orders: number
  }

  export type ReferralsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral_orders?: boolean | ReferralsCountOutputTypeCountReferral_ordersArgs
  }

  // Custom InputTypes
  /**
   * ReferralsCountOutputType without action
   */
  export type ReferralsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralsCountOutputType
     */
    select?: ReferralsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReferralsCountOutputType without action
   */
  export type ReferralsCountOutputTypeCountReferral_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referral_ordersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
    featured: string | null
    status: boolean | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
    featured: string | null
    status: boolean | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    price: number
    createdAt: number
    updatedAt: number
    description: number
    featured: number
    status: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    featured?: true
    status?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    featured?: true
    status?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    featured?: true
    status?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    price: number
    createdAt: Date
    updatedAt: Date
    description: string | null
    featured: string | null
    status: boolean
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    featured?: boolean
    status?: boolean
    orders?: boolean | Product$ordersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    featured?: boolean
    status?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    featured?: boolean
    status?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    featured?: boolean
    status?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "createdAt" | "updatedAt" | "description" | "featured" | "status", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Product$ordersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      createdAt: Date
      updatedAt: Date
      description: string | null
      featured: string | null
      status: boolean
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Product$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Product$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly description: FieldRef<"Product", 'String'>
    readonly featured: FieldRef<"Product", 'String'>
    readonly status: FieldRef<"Product", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.orders
   */
  export type Product$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    createdAt: number
    updatedAt: number
    role: number
    status: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    status?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role
    status: $Enums.UserStatus
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    status?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    status?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "createdAt" | "updatedAt" | "role" | "status", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role
      status: $Enums.UserStatus
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'UserStatus'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    productId: string | null
    userId: string | null
    paymentId: string | null
    referralId: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    userId: string | null
    paymentId: string | null
    referralId: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    productId: number
    userId: number
    paymentId: number
    referralId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrdersMinAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    paymentId?: true
    referralId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    paymentId?: true
    referralId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    paymentId?: true
    referralId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    productId: string
    userId: string
    paymentId: string | null
    referralId: string | null
    status: $Enums.OrderStatus
    createdAt: Date
    updatedAt: Date
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    paymentId?: boolean
    referralId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | ProductDefaultArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
    referral_orders?: boolean | orders$referral_ordersArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    paymentId?: boolean
    referralId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | ProductDefaultArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    paymentId?: boolean
    referralId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | ProductDefaultArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    productId?: boolean
    userId?: boolean
    paymentId?: boolean
    referralId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "userId" | "paymentId" | "referralId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductDefaultArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
    referral_orders?: boolean | orders$referral_ordersArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductDefaultArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductDefaultArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>
      referral_orders: Prisma.$referral_ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      userId: string
      paymentId: string | null
      referralId: string | null
      status: $Enums.OrderStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referral_orders<T extends orders$referral_ordersArgs<ExtArgs> = {}>(args?: Subset<T, orders$referral_ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'String'>
    readonly productId: FieldRef<"orders", 'String'>
    readonly userId: FieldRef<"orders", 'String'>
    readonly paymentId: FieldRef<"orders", 'String'>
    readonly referralId: FieldRef<"orders", 'String'>
    readonly status: FieldRef<"orders", 'OrderStatus'>
    readonly createdAt: FieldRef<"orders", 'DateTime'>
    readonly updatedAt: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.referral_orders
   */
  export type orders$referral_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_orders
     */
    select?: referral_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_orders
     */
    omit?: referral_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_ordersInclude<ExtArgs> | null
    where?: referral_ordersWhereInput
    orderBy?: referral_ordersOrderByWithRelationInput | referral_ordersOrderByWithRelationInput[]
    cursor?: referral_ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Referral_ordersScalarFieldEnum | Referral_ordersScalarFieldEnum[]
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    discount: number | null
    amount: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    discount: number | null
    amount: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: string | null
    paymentCode: string | null
    discount: number | null
    amount: number | null
    paymentMethod: string | null
    orderId: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: string | null
    paymentCode: string | null
    discount: number | null
    amount: number | null
    paymentMethod: string | null
    orderId: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    paymentCode: number
    discount: number
    amount: number
    paymentMethod: number
    orderId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    discount?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    discount?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    paymentCode?: true
    discount?: true
    amount?: true
    paymentMethod?: true
    orderId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    paymentCode?: true
    discount?: true
    amount?: true
    paymentMethod?: true
    orderId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    paymentCode?: true
    discount?: true
    amount?: true
    paymentMethod?: true
    orderId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: string
    paymentCode: string
    discount: number
    amount: number
    paymentMethod: string
    orderId: string
    status: $Enums.OrderStatus
    createdAt: Date
    updatedAt: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentCode?: boolean
    discount?: boolean
    amount?: boolean
    paymentMethod?: boolean
    orderId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentCode?: boolean
    discount?: boolean
    amount?: boolean
    paymentMethod?: boolean
    orderId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentCode?: boolean
    discount?: boolean
    amount?: boolean
    paymentMethod?: boolean
    orderId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectScalar = {
    id?: boolean
    paymentCode?: boolean
    discount?: boolean
    amount?: boolean
    paymentMethod?: boolean
    orderId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentCode" | "discount" | "amount" | "paymentMethod" | "orderId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["payments"]>

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentCode: string
      discount: number
      amount: number
      paymentMethod: string
      orderId: string
      status: $Enums.OrderStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'String'>
    readonly paymentCode: FieldRef<"payments", 'String'>
    readonly discount: FieldRef<"payments", 'Int'>
    readonly amount: FieldRef<"payments", 'Int'>
    readonly paymentMethod: FieldRef<"payments", 'String'>
    readonly orderId: FieldRef<"payments", 'String'>
    readonly status: FieldRef<"payments", 'OrderStatus'>
    readonly createdAt: FieldRef<"payments", 'DateTime'>
    readonly updatedAt: FieldRef<"payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments createManyAndReturn
   */
  export type paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments updateManyAndReturn
   */
  export type paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
  }


  /**
   * Model referral_orders
   */

  export type AggregateReferral_orders = {
    _count: Referral_ordersCountAggregateOutputType | null
    _min: Referral_ordersMinAggregateOutputType | null
    _max: Referral_ordersMaxAggregateOutputType | null
  }

  export type Referral_ordersMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    referralId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Referral_ordersMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    referralId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Referral_ordersCountAggregateOutputType = {
    id: number
    orderId: number
    referralId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Referral_ordersMinAggregateInputType = {
    id?: true
    orderId?: true
    referralId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Referral_ordersMaxAggregateInputType = {
    id?: true
    orderId?: true
    referralId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Referral_ordersCountAggregateInputType = {
    id?: true
    orderId?: true
    referralId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Referral_ordersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which referral_orders to aggregate.
     */
    where?: referral_ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_orders to fetch.
     */
    orderBy?: referral_ordersOrderByWithRelationInput | referral_ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: referral_ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned referral_orders
    **/
    _count?: true | Referral_ordersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Referral_ordersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Referral_ordersMaxAggregateInputType
  }

  export type GetReferral_ordersAggregateType<T extends Referral_ordersAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral_orders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral_orders[P]>
      : GetScalarType<T[P], AggregateReferral_orders[P]>
  }




  export type referral_ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referral_ordersWhereInput
    orderBy?: referral_ordersOrderByWithAggregationInput | referral_ordersOrderByWithAggregationInput[]
    by: Referral_ordersScalarFieldEnum[] | Referral_ordersScalarFieldEnum
    having?: referral_ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Referral_ordersCountAggregateInputType | true
    _min?: Referral_ordersMinAggregateInputType
    _max?: Referral_ordersMaxAggregateInputType
  }

  export type Referral_ordersGroupByOutputType = {
    id: string
    orderId: string
    referralId: string
    createdAt: Date
    updatedAt: Date
    _count: Referral_ordersCountAggregateOutputType | null
    _min: Referral_ordersMinAggregateOutputType | null
    _max: Referral_ordersMaxAggregateOutputType | null
  }

  type GetReferral_ordersGroupByPayload<T extends referral_ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Referral_ordersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Referral_ordersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Referral_ordersGroupByOutputType[P]>
            : GetScalarType<T[P], Referral_ordersGroupByOutputType[P]>
        }
      >
    >


  export type referral_ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    referralId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    referrals?: boolean | referralsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral_orders"]>

  export type referral_ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    referralId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    referrals?: boolean | referralsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral_orders"]>

  export type referral_ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    referralId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    referrals?: boolean | referralsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral_orders"]>

  export type referral_ordersSelectScalar = {
    id?: boolean
    orderId?: boolean
    referralId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type referral_ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "referralId" | "createdAt" | "updatedAt", ExtArgs["result"]["referral_orders"]>
  export type referral_ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    referrals?: boolean | referralsDefaultArgs<ExtArgs>
  }
  export type referral_ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    referrals?: boolean | referralsDefaultArgs<ExtArgs>
  }
  export type referral_ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    referrals?: boolean | referralsDefaultArgs<ExtArgs>
  }

  export type $referral_ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "referral_orders"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
      referrals: Prisma.$referralsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      referralId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["referral_orders"]>
    composites: {}
  }

  type referral_ordersGetPayload<S extends boolean | null | undefined | referral_ordersDefaultArgs> = $Result.GetResult<Prisma.$referral_ordersPayload, S>

  type referral_ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<referral_ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Referral_ordersCountAggregateInputType | true
    }

  export interface referral_ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['referral_orders'], meta: { name: 'referral_orders' } }
    /**
     * Find zero or one Referral_orders that matches the filter.
     * @param {referral_ordersFindUniqueArgs} args - Arguments to find a Referral_orders
     * @example
     * // Get one Referral_orders
     * const referral_orders = await prisma.referral_orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends referral_ordersFindUniqueArgs>(args: SelectSubset<T, referral_ordersFindUniqueArgs<ExtArgs>>): Prisma__referral_ordersClient<$Result.GetResult<Prisma.$referral_ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Referral_orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {referral_ordersFindUniqueOrThrowArgs} args - Arguments to find a Referral_orders
     * @example
     * // Get one Referral_orders
     * const referral_orders = await prisma.referral_orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends referral_ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, referral_ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__referral_ordersClient<$Result.GetResult<Prisma.$referral_ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral_orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_ordersFindFirstArgs} args - Arguments to find a Referral_orders
     * @example
     * // Get one Referral_orders
     * const referral_orders = await prisma.referral_orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends referral_ordersFindFirstArgs>(args?: SelectSubset<T, referral_ordersFindFirstArgs<ExtArgs>>): Prisma__referral_ordersClient<$Result.GetResult<Prisma.$referral_ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral_orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_ordersFindFirstOrThrowArgs} args - Arguments to find a Referral_orders
     * @example
     * // Get one Referral_orders
     * const referral_orders = await prisma.referral_orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends referral_ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, referral_ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__referral_ordersClient<$Result.GetResult<Prisma.$referral_ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Referral_orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referral_orders
     * const referral_orders = await prisma.referral_orders.findMany()
     * 
     * // Get first 10 Referral_orders
     * const referral_orders = await prisma.referral_orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referral_ordersWithIdOnly = await prisma.referral_orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends referral_ordersFindManyArgs>(args?: SelectSubset<T, referral_ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Referral_orders.
     * @param {referral_ordersCreateArgs} args - Arguments to create a Referral_orders.
     * @example
     * // Create one Referral_orders
     * const Referral_orders = await prisma.referral_orders.create({
     *   data: {
     *     // ... data to create a Referral_orders
     *   }
     * })
     * 
     */
    create<T extends referral_ordersCreateArgs>(args: SelectSubset<T, referral_ordersCreateArgs<ExtArgs>>): Prisma__referral_ordersClient<$Result.GetResult<Prisma.$referral_ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Referral_orders.
     * @param {referral_ordersCreateManyArgs} args - Arguments to create many Referral_orders.
     * @example
     * // Create many Referral_orders
     * const referral_orders = await prisma.referral_orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends referral_ordersCreateManyArgs>(args?: SelectSubset<T, referral_ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referral_orders and returns the data saved in the database.
     * @param {referral_ordersCreateManyAndReturnArgs} args - Arguments to create many Referral_orders.
     * @example
     * // Create many Referral_orders
     * const referral_orders = await prisma.referral_orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referral_orders and only return the `id`
     * const referral_ordersWithIdOnly = await prisma.referral_orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends referral_ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, referral_ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Referral_orders.
     * @param {referral_ordersDeleteArgs} args - Arguments to delete one Referral_orders.
     * @example
     * // Delete one Referral_orders
     * const Referral_orders = await prisma.referral_orders.delete({
     *   where: {
     *     // ... filter to delete one Referral_orders
     *   }
     * })
     * 
     */
    delete<T extends referral_ordersDeleteArgs>(args: SelectSubset<T, referral_ordersDeleteArgs<ExtArgs>>): Prisma__referral_ordersClient<$Result.GetResult<Prisma.$referral_ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Referral_orders.
     * @param {referral_ordersUpdateArgs} args - Arguments to update one Referral_orders.
     * @example
     * // Update one Referral_orders
     * const referral_orders = await prisma.referral_orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends referral_ordersUpdateArgs>(args: SelectSubset<T, referral_ordersUpdateArgs<ExtArgs>>): Prisma__referral_ordersClient<$Result.GetResult<Prisma.$referral_ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Referral_orders.
     * @param {referral_ordersDeleteManyArgs} args - Arguments to filter Referral_orders to delete.
     * @example
     * // Delete a few Referral_orders
     * const { count } = await prisma.referral_orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends referral_ordersDeleteManyArgs>(args?: SelectSubset<T, referral_ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referral_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referral_orders
     * const referral_orders = await prisma.referral_orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends referral_ordersUpdateManyArgs>(args: SelectSubset<T, referral_ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referral_orders and returns the data updated in the database.
     * @param {referral_ordersUpdateManyAndReturnArgs} args - Arguments to update many Referral_orders.
     * @example
     * // Update many Referral_orders
     * const referral_orders = await prisma.referral_orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Referral_orders and only return the `id`
     * const referral_ordersWithIdOnly = await prisma.referral_orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends referral_ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, referral_ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Referral_orders.
     * @param {referral_ordersUpsertArgs} args - Arguments to update or create a Referral_orders.
     * @example
     * // Update or create a Referral_orders
     * const referral_orders = await prisma.referral_orders.upsert({
     *   create: {
     *     // ... data to create a Referral_orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral_orders we want to update
     *   }
     * })
     */
    upsert<T extends referral_ordersUpsertArgs>(args: SelectSubset<T, referral_ordersUpsertArgs<ExtArgs>>): Prisma__referral_ordersClient<$Result.GetResult<Prisma.$referral_ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Referral_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_ordersCountArgs} args - Arguments to filter Referral_orders to count.
     * @example
     * // Count the number of Referral_orders
     * const count = await prisma.referral_orders.count({
     *   where: {
     *     // ... the filter for the Referral_orders we want to count
     *   }
     * })
    **/
    count<T extends referral_ordersCountArgs>(
      args?: Subset<T, referral_ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Referral_ordersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Referral_ordersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Referral_ordersAggregateArgs>(args: Subset<T, Referral_ordersAggregateArgs>): Prisma.PrismaPromise<GetReferral_ordersAggregateType<T>>

    /**
     * Group by Referral_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends referral_ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: referral_ordersGroupByArgs['orderBy'] }
        : { orderBy?: referral_ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, referral_ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferral_ordersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the referral_orders model
   */
  readonly fields: referral_ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for referral_orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__referral_ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referrals<T extends referralsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, referralsDefaultArgs<ExtArgs>>): Prisma__referralsClient<$Result.GetResult<Prisma.$referralsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the referral_orders model
   */
  interface referral_ordersFieldRefs {
    readonly id: FieldRef<"referral_orders", 'String'>
    readonly orderId: FieldRef<"referral_orders", 'String'>
    readonly referralId: FieldRef<"referral_orders", 'String'>
    readonly createdAt: FieldRef<"referral_orders", 'DateTime'>
    readonly updatedAt: FieldRef<"referral_orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * referral_orders findUnique
   */
  export type referral_ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_orders
     */
    select?: referral_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_orders
     */
    omit?: referral_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_ordersInclude<ExtArgs> | null
    /**
     * Filter, which referral_orders to fetch.
     */
    where: referral_ordersWhereUniqueInput
  }

  /**
   * referral_orders findUniqueOrThrow
   */
  export type referral_ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_orders
     */
    select?: referral_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_orders
     */
    omit?: referral_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_ordersInclude<ExtArgs> | null
    /**
     * Filter, which referral_orders to fetch.
     */
    where: referral_ordersWhereUniqueInput
  }

  /**
   * referral_orders findFirst
   */
  export type referral_ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_orders
     */
    select?: referral_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_orders
     */
    omit?: referral_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_ordersInclude<ExtArgs> | null
    /**
     * Filter, which referral_orders to fetch.
     */
    where?: referral_ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_orders to fetch.
     */
    orderBy?: referral_ordersOrderByWithRelationInput | referral_ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for referral_orders.
     */
    cursor?: referral_ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of referral_orders.
     */
    distinct?: Referral_ordersScalarFieldEnum | Referral_ordersScalarFieldEnum[]
  }

  /**
   * referral_orders findFirstOrThrow
   */
  export type referral_ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_orders
     */
    select?: referral_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_orders
     */
    omit?: referral_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_ordersInclude<ExtArgs> | null
    /**
     * Filter, which referral_orders to fetch.
     */
    where?: referral_ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_orders to fetch.
     */
    orderBy?: referral_ordersOrderByWithRelationInput | referral_ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for referral_orders.
     */
    cursor?: referral_ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of referral_orders.
     */
    distinct?: Referral_ordersScalarFieldEnum | Referral_ordersScalarFieldEnum[]
  }

  /**
   * referral_orders findMany
   */
  export type referral_ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_orders
     */
    select?: referral_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_orders
     */
    omit?: referral_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_ordersInclude<ExtArgs> | null
    /**
     * Filter, which referral_orders to fetch.
     */
    where?: referral_ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_orders to fetch.
     */
    orderBy?: referral_ordersOrderByWithRelationInput | referral_ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing referral_orders.
     */
    cursor?: referral_ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_orders.
     */
    skip?: number
    distinct?: Referral_ordersScalarFieldEnum | Referral_ordersScalarFieldEnum[]
  }

  /**
   * referral_orders create
   */
  export type referral_ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_orders
     */
    select?: referral_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_orders
     */
    omit?: referral_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a referral_orders.
     */
    data: XOR<referral_ordersCreateInput, referral_ordersUncheckedCreateInput>
  }

  /**
   * referral_orders createMany
   */
  export type referral_ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many referral_orders.
     */
    data: referral_ordersCreateManyInput | referral_ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * referral_orders createManyAndReturn
   */
  export type referral_ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_orders
     */
    select?: referral_ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the referral_orders
     */
    omit?: referral_ordersOmit<ExtArgs> | null
    /**
     * The data used to create many referral_orders.
     */
    data: referral_ordersCreateManyInput | referral_ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * referral_orders update
   */
  export type referral_ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_orders
     */
    select?: referral_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_orders
     */
    omit?: referral_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a referral_orders.
     */
    data: XOR<referral_ordersUpdateInput, referral_ordersUncheckedUpdateInput>
    /**
     * Choose, which referral_orders to update.
     */
    where: referral_ordersWhereUniqueInput
  }

  /**
   * referral_orders updateMany
   */
  export type referral_ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update referral_orders.
     */
    data: XOR<referral_ordersUpdateManyMutationInput, referral_ordersUncheckedUpdateManyInput>
    /**
     * Filter which referral_orders to update
     */
    where?: referral_ordersWhereInput
    /**
     * Limit how many referral_orders to update.
     */
    limit?: number
  }

  /**
   * referral_orders updateManyAndReturn
   */
  export type referral_ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_orders
     */
    select?: referral_ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the referral_orders
     */
    omit?: referral_ordersOmit<ExtArgs> | null
    /**
     * The data used to update referral_orders.
     */
    data: XOR<referral_ordersUpdateManyMutationInput, referral_ordersUncheckedUpdateManyInput>
    /**
     * Filter which referral_orders to update
     */
    where?: referral_ordersWhereInput
    /**
     * Limit how many referral_orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * referral_orders upsert
   */
  export type referral_ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_orders
     */
    select?: referral_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_orders
     */
    omit?: referral_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the referral_orders to update in case it exists.
     */
    where: referral_ordersWhereUniqueInput
    /**
     * In case the referral_orders found by the `where` argument doesn't exist, create a new referral_orders with this data.
     */
    create: XOR<referral_ordersCreateInput, referral_ordersUncheckedCreateInput>
    /**
     * In case the referral_orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<referral_ordersUpdateInput, referral_ordersUncheckedUpdateInput>
  }

  /**
   * referral_orders delete
   */
  export type referral_ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_orders
     */
    select?: referral_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_orders
     */
    omit?: referral_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_ordersInclude<ExtArgs> | null
    /**
     * Filter which referral_orders to delete.
     */
    where: referral_ordersWhereUniqueInput
  }

  /**
   * referral_orders deleteMany
   */
  export type referral_ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which referral_orders to delete
     */
    where?: referral_ordersWhereInput
    /**
     * Limit how many referral_orders to delete.
     */
    limit?: number
  }

  /**
   * referral_orders without action
   */
  export type referral_ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_orders
     */
    select?: referral_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_orders
     */
    omit?: referral_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_ordersInclude<ExtArgs> | null
  }


  /**
   * Model referrals
   */

  export type AggregateReferrals = {
    _count: ReferralsCountAggregateOutputType | null
    _avg: ReferralsAvgAggregateOutputType | null
    _sum: ReferralsSumAggregateOutputType | null
    _min: ReferralsMinAggregateOutputType | null
    _max: ReferralsMaxAggregateOutputType | null
  }

  export type ReferralsAvgAggregateOutputType = {
    discount: number | null
  }

  export type ReferralsSumAggregateOutputType = {
    discount: number | null
  }

  export type ReferralsMinAggregateOutputType = {
    id: string | null
    code: string | null
    discount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    referralId: string | null
  }

  export type ReferralsMaxAggregateOutputType = {
    id: string | null
    code: string | null
    discount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    referralId: string | null
  }

  export type ReferralsCountAggregateOutputType = {
    id: number
    code: number
    discount: number
    createdAt: number
    updatedAt: number
    referralId: number
    _all: number
  }


  export type ReferralsAvgAggregateInputType = {
    discount?: true
  }

  export type ReferralsSumAggregateInputType = {
    discount?: true
  }

  export type ReferralsMinAggregateInputType = {
    id?: true
    code?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
    referralId?: true
  }

  export type ReferralsMaxAggregateInputType = {
    id?: true
    code?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
    referralId?: true
  }

  export type ReferralsCountAggregateInputType = {
    id?: true
    code?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
    referralId?: true
    _all?: true
  }

  export type ReferralsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which referrals to aggregate.
     */
    where?: referralsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referrals to fetch.
     */
    orderBy?: referralsOrderByWithRelationInput | referralsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: referralsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned referrals
    **/
    _count?: true | ReferralsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralsMaxAggregateInputType
  }

  export type GetReferralsAggregateType<T extends ReferralsAggregateArgs> = {
        [P in keyof T & keyof AggregateReferrals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferrals[P]>
      : GetScalarType<T[P], AggregateReferrals[P]>
  }




  export type referralsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referralsWhereInput
    orderBy?: referralsOrderByWithAggregationInput | referralsOrderByWithAggregationInput[]
    by: ReferralsScalarFieldEnum[] | ReferralsScalarFieldEnum
    having?: referralsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralsCountAggregateInputType | true
    _avg?: ReferralsAvgAggregateInputType
    _sum?: ReferralsSumAggregateInputType
    _min?: ReferralsMinAggregateInputType
    _max?: ReferralsMaxAggregateInputType
  }

  export type ReferralsGroupByOutputType = {
    id: string
    code: string
    discount: number
    createdAt: Date
    updatedAt: Date
    referralId: string | null
    _count: ReferralsCountAggregateOutputType | null
    _avg: ReferralsAvgAggregateOutputType | null
    _sum: ReferralsSumAggregateOutputType | null
    _min: ReferralsMinAggregateOutputType | null
    _max: ReferralsMaxAggregateOutputType | null
  }

  type GetReferralsGroupByPayload<T extends referralsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralsGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralsGroupByOutputType[P]>
        }
      >
    >


  export type referralsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referralId?: boolean
    referral_orders?: boolean | referrals$referral_ordersArgs<ExtArgs>
    _count?: boolean | ReferralsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referrals"]>

  export type referralsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referralId?: boolean
  }, ExtArgs["result"]["referrals"]>

  export type referralsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referralId?: boolean
  }, ExtArgs["result"]["referrals"]>

  export type referralsSelectScalar = {
    id?: boolean
    code?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referralId?: boolean
  }

  export type referralsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "discount" | "createdAt" | "updatedAt" | "referralId", ExtArgs["result"]["referrals"]>
  export type referralsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral_orders?: boolean | referrals$referral_ordersArgs<ExtArgs>
    _count?: boolean | ReferralsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type referralsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type referralsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $referralsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "referrals"
    objects: {
      referral_orders: Prisma.$referral_ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      discount: number
      createdAt: Date
      updatedAt: Date
      referralId: string | null
    }, ExtArgs["result"]["referrals"]>
    composites: {}
  }

  type referralsGetPayload<S extends boolean | null | undefined | referralsDefaultArgs> = $Result.GetResult<Prisma.$referralsPayload, S>

  type referralsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<referralsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralsCountAggregateInputType | true
    }

  export interface referralsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['referrals'], meta: { name: 'referrals' } }
    /**
     * Find zero or one Referrals that matches the filter.
     * @param {referralsFindUniqueArgs} args - Arguments to find a Referrals
     * @example
     * // Get one Referrals
     * const referrals = await prisma.referrals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends referralsFindUniqueArgs>(args: SelectSubset<T, referralsFindUniqueArgs<ExtArgs>>): Prisma__referralsClient<$Result.GetResult<Prisma.$referralsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Referrals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {referralsFindUniqueOrThrowArgs} args - Arguments to find a Referrals
     * @example
     * // Get one Referrals
     * const referrals = await prisma.referrals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends referralsFindUniqueOrThrowArgs>(args: SelectSubset<T, referralsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__referralsClient<$Result.GetResult<Prisma.$referralsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralsFindFirstArgs} args - Arguments to find a Referrals
     * @example
     * // Get one Referrals
     * const referrals = await prisma.referrals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends referralsFindFirstArgs>(args?: SelectSubset<T, referralsFindFirstArgs<ExtArgs>>): Prisma__referralsClient<$Result.GetResult<Prisma.$referralsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referrals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralsFindFirstOrThrowArgs} args - Arguments to find a Referrals
     * @example
     * // Get one Referrals
     * const referrals = await prisma.referrals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends referralsFindFirstOrThrowArgs>(args?: SelectSubset<T, referralsFindFirstOrThrowArgs<ExtArgs>>): Prisma__referralsClient<$Result.GetResult<Prisma.$referralsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referrals
     * const referrals = await prisma.referrals.findMany()
     * 
     * // Get first 10 Referrals
     * const referrals = await prisma.referrals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralsWithIdOnly = await prisma.referrals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends referralsFindManyArgs>(args?: SelectSubset<T, referralsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referralsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Referrals.
     * @param {referralsCreateArgs} args - Arguments to create a Referrals.
     * @example
     * // Create one Referrals
     * const Referrals = await prisma.referrals.create({
     *   data: {
     *     // ... data to create a Referrals
     *   }
     * })
     * 
     */
    create<T extends referralsCreateArgs>(args: SelectSubset<T, referralsCreateArgs<ExtArgs>>): Prisma__referralsClient<$Result.GetResult<Prisma.$referralsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Referrals.
     * @param {referralsCreateManyArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referrals = await prisma.referrals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends referralsCreateManyArgs>(args?: SelectSubset<T, referralsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referrals and returns the data saved in the database.
     * @param {referralsCreateManyAndReturnArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referrals = await prisma.referrals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referrals and only return the `id`
     * const referralsWithIdOnly = await prisma.referrals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends referralsCreateManyAndReturnArgs>(args?: SelectSubset<T, referralsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referralsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Referrals.
     * @param {referralsDeleteArgs} args - Arguments to delete one Referrals.
     * @example
     * // Delete one Referrals
     * const Referrals = await prisma.referrals.delete({
     *   where: {
     *     // ... filter to delete one Referrals
     *   }
     * })
     * 
     */
    delete<T extends referralsDeleteArgs>(args: SelectSubset<T, referralsDeleteArgs<ExtArgs>>): Prisma__referralsClient<$Result.GetResult<Prisma.$referralsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Referrals.
     * @param {referralsUpdateArgs} args - Arguments to update one Referrals.
     * @example
     * // Update one Referrals
     * const referrals = await prisma.referrals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends referralsUpdateArgs>(args: SelectSubset<T, referralsUpdateArgs<ExtArgs>>): Prisma__referralsClient<$Result.GetResult<Prisma.$referralsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Referrals.
     * @param {referralsDeleteManyArgs} args - Arguments to filter Referrals to delete.
     * @example
     * // Delete a few Referrals
     * const { count } = await prisma.referrals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends referralsDeleteManyArgs>(args?: SelectSubset<T, referralsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referrals
     * const referrals = await prisma.referrals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends referralsUpdateManyArgs>(args: SelectSubset<T, referralsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals and returns the data updated in the database.
     * @param {referralsUpdateManyAndReturnArgs} args - Arguments to update many Referrals.
     * @example
     * // Update many Referrals
     * const referrals = await prisma.referrals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Referrals and only return the `id`
     * const referralsWithIdOnly = await prisma.referrals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends referralsUpdateManyAndReturnArgs>(args: SelectSubset<T, referralsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referralsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Referrals.
     * @param {referralsUpsertArgs} args - Arguments to update or create a Referrals.
     * @example
     * // Update or create a Referrals
     * const referrals = await prisma.referrals.upsert({
     *   create: {
     *     // ... data to create a Referrals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referrals we want to update
     *   }
     * })
     */
    upsert<T extends referralsUpsertArgs>(args: SelectSubset<T, referralsUpsertArgs<ExtArgs>>): Prisma__referralsClient<$Result.GetResult<Prisma.$referralsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralsCountArgs} args - Arguments to filter Referrals to count.
     * @example
     * // Count the number of Referrals
     * const count = await prisma.referrals.count({
     *   where: {
     *     // ... the filter for the Referrals we want to count
     *   }
     * })
    **/
    count<T extends referralsCountArgs>(
      args?: Subset<T, referralsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferralsAggregateArgs>(args: Subset<T, ReferralsAggregateArgs>): Prisma.PrismaPromise<GetReferralsAggregateType<T>>

    /**
     * Group by Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends referralsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: referralsGroupByArgs['orderBy'] }
        : { orderBy?: referralsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, referralsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the referrals model
   */
  readonly fields: referralsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for referrals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__referralsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referral_orders<T extends referrals$referral_ordersArgs<ExtArgs> = {}>(args?: Subset<T, referrals$referral_ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the referrals model
   */
  interface referralsFieldRefs {
    readonly id: FieldRef<"referrals", 'String'>
    readonly code: FieldRef<"referrals", 'String'>
    readonly discount: FieldRef<"referrals", 'Int'>
    readonly createdAt: FieldRef<"referrals", 'DateTime'>
    readonly updatedAt: FieldRef<"referrals", 'DateTime'>
    readonly referralId: FieldRef<"referrals", 'String'>
  }
    

  // Custom InputTypes
  /**
   * referrals findUnique
   */
  export type referralsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referrals
     */
    select?: referralsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referrals
     */
    omit?: referralsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralsInclude<ExtArgs> | null
    /**
     * Filter, which referrals to fetch.
     */
    where: referralsWhereUniqueInput
  }

  /**
   * referrals findUniqueOrThrow
   */
  export type referralsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referrals
     */
    select?: referralsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referrals
     */
    omit?: referralsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralsInclude<ExtArgs> | null
    /**
     * Filter, which referrals to fetch.
     */
    where: referralsWhereUniqueInput
  }

  /**
   * referrals findFirst
   */
  export type referralsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referrals
     */
    select?: referralsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referrals
     */
    omit?: referralsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralsInclude<ExtArgs> | null
    /**
     * Filter, which referrals to fetch.
     */
    where?: referralsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referrals to fetch.
     */
    orderBy?: referralsOrderByWithRelationInput | referralsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for referrals.
     */
    cursor?: referralsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of referrals.
     */
    distinct?: ReferralsScalarFieldEnum | ReferralsScalarFieldEnum[]
  }

  /**
   * referrals findFirstOrThrow
   */
  export type referralsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referrals
     */
    select?: referralsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referrals
     */
    omit?: referralsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralsInclude<ExtArgs> | null
    /**
     * Filter, which referrals to fetch.
     */
    where?: referralsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referrals to fetch.
     */
    orderBy?: referralsOrderByWithRelationInput | referralsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for referrals.
     */
    cursor?: referralsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of referrals.
     */
    distinct?: ReferralsScalarFieldEnum | ReferralsScalarFieldEnum[]
  }

  /**
   * referrals findMany
   */
  export type referralsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referrals
     */
    select?: referralsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referrals
     */
    omit?: referralsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralsInclude<ExtArgs> | null
    /**
     * Filter, which referrals to fetch.
     */
    where?: referralsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referrals to fetch.
     */
    orderBy?: referralsOrderByWithRelationInput | referralsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing referrals.
     */
    cursor?: referralsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referrals.
     */
    skip?: number
    distinct?: ReferralsScalarFieldEnum | ReferralsScalarFieldEnum[]
  }

  /**
   * referrals create
   */
  export type referralsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referrals
     */
    select?: referralsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referrals
     */
    omit?: referralsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralsInclude<ExtArgs> | null
    /**
     * The data needed to create a referrals.
     */
    data: XOR<referralsCreateInput, referralsUncheckedCreateInput>
  }

  /**
   * referrals createMany
   */
  export type referralsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many referrals.
     */
    data: referralsCreateManyInput | referralsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * referrals createManyAndReturn
   */
  export type referralsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referrals
     */
    select?: referralsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the referrals
     */
    omit?: referralsOmit<ExtArgs> | null
    /**
     * The data used to create many referrals.
     */
    data: referralsCreateManyInput | referralsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * referrals update
   */
  export type referralsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referrals
     */
    select?: referralsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referrals
     */
    omit?: referralsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralsInclude<ExtArgs> | null
    /**
     * The data needed to update a referrals.
     */
    data: XOR<referralsUpdateInput, referralsUncheckedUpdateInput>
    /**
     * Choose, which referrals to update.
     */
    where: referralsWhereUniqueInput
  }

  /**
   * referrals updateMany
   */
  export type referralsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update referrals.
     */
    data: XOR<referralsUpdateManyMutationInput, referralsUncheckedUpdateManyInput>
    /**
     * Filter which referrals to update
     */
    where?: referralsWhereInput
    /**
     * Limit how many referrals to update.
     */
    limit?: number
  }

  /**
   * referrals updateManyAndReturn
   */
  export type referralsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referrals
     */
    select?: referralsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the referrals
     */
    omit?: referralsOmit<ExtArgs> | null
    /**
     * The data used to update referrals.
     */
    data: XOR<referralsUpdateManyMutationInput, referralsUncheckedUpdateManyInput>
    /**
     * Filter which referrals to update
     */
    where?: referralsWhereInput
    /**
     * Limit how many referrals to update.
     */
    limit?: number
  }

  /**
   * referrals upsert
   */
  export type referralsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referrals
     */
    select?: referralsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referrals
     */
    omit?: referralsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralsInclude<ExtArgs> | null
    /**
     * The filter to search for the referrals to update in case it exists.
     */
    where: referralsWhereUniqueInput
    /**
     * In case the referrals found by the `where` argument doesn't exist, create a new referrals with this data.
     */
    create: XOR<referralsCreateInput, referralsUncheckedCreateInput>
    /**
     * In case the referrals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<referralsUpdateInput, referralsUncheckedUpdateInput>
  }

  /**
   * referrals delete
   */
  export type referralsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referrals
     */
    select?: referralsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referrals
     */
    omit?: referralsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralsInclude<ExtArgs> | null
    /**
     * Filter which referrals to delete.
     */
    where: referralsWhereUniqueInput
  }

  /**
   * referrals deleteMany
   */
  export type referralsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which referrals to delete
     */
    where?: referralsWhereInput
    /**
     * Limit how many referrals to delete.
     */
    limit?: number
  }

  /**
   * referrals.referral_orders
   */
  export type referrals$referral_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_orders
     */
    select?: referral_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_orders
     */
    omit?: referral_ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_ordersInclude<ExtArgs> | null
    where?: referral_ordersWhereInput
    orderBy?: referral_ordersOrderByWithRelationInput | referral_ordersOrderByWithRelationInput[]
    cursor?: referral_ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Referral_ordersScalarFieldEnum | Referral_ordersScalarFieldEnum[]
  }

  /**
   * referrals without action
   */
  export type referralsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referrals
     */
    select?: referralsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referrals
     */
    omit?: referralsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    description: 'description',
    featured: 'featured',
    status: 'status'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    userId: 'userId',
    paymentId: 'paymentId',
    referralId: 'referralId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    paymentCode: 'paymentCode',
    discount: 'discount',
    amount: 'amount',
    paymentMethod: 'paymentMethod',
    orderId: 'orderId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const Referral_ordersScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    referralId: 'referralId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Referral_ordersScalarFieldEnum = (typeof Referral_ordersScalarFieldEnum)[keyof typeof Referral_ordersScalarFieldEnum]


  export const ReferralsScalarFieldEnum: {
    id: 'id',
    code: 'code',
    discount: 'discount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    referralId: 'referralId'
  };

  export type ReferralsScalarFieldEnum = (typeof ReferralsScalarFieldEnum)[keyof typeof ReferralsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    description?: StringNullableFilter<"Product"> | string | null
    featured?: StringNullableFilter<"Product"> | string | null
    status?: BoolFilter<"Product"> | boolean
    orders?: OrdersListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    featured?: SortOrderInput | SortOrder
    status?: SortOrder
    orders?: ordersOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    description?: StringNullableFilter<"Product"> | string | null
    featured?: StringNullableFilter<"Product"> | string | null
    status?: BoolFilter<"Product"> | boolean
    orders?: OrdersListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    featured?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    featured?: StringNullableWithAggregatesFilter<"Product"> | string | null
    status?: BoolWithAggregatesFilter<"Product"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    orders?: OrdersListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    status?: SortOrder
    orders?: ordersOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    orders?: OrdersListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    status?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: StringFilter<"orders"> | string
    productId?: StringFilter<"orders"> | string
    userId?: StringFilter<"orders"> | string
    paymentId?: StringNullableFilter<"orders"> | string | null
    referralId?: StringNullableFilter<"orders"> | string | null
    status?: EnumOrderStatusFilter<"orders"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"orders"> | Date | string
    updatedAt?: DateTimeFilter<"orders"> | Date | string
    products?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
    referral_orders?: Referral_ordersListRelationFilter
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    referralId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByWithRelationInput
    users?: UserOrderByWithRelationInput
    referral_orders?: referral_ordersOrderByRelationAggregateInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    productId?: StringFilter<"orders"> | string
    userId?: StringFilter<"orders"> | string
    paymentId?: StringNullableFilter<"orders"> | string | null
    referralId?: StringNullableFilter<"orders"> | string | null
    status?: EnumOrderStatusFilter<"orders"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"orders"> | Date | string
    updatedAt?: DateTimeFilter<"orders"> | Date | string
    products?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
    referral_orders?: Referral_ordersListRelationFilter
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    referralId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"orders"> | string
    productId?: StringWithAggregatesFilter<"orders"> | string
    userId?: StringWithAggregatesFilter<"orders"> | string
    paymentId?: StringNullableWithAggregatesFilter<"orders"> | string | null
    referralId?: StringNullableWithAggregatesFilter<"orders"> | string | null
    status?: EnumOrderStatusWithAggregatesFilter<"orders"> | $Enums.OrderStatus
    createdAt?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"orders"> | Date | string
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: StringFilter<"payments"> | string
    paymentCode?: StringFilter<"payments"> | string
    discount?: IntFilter<"payments"> | number
    amount?: IntFilter<"payments"> | number
    paymentMethod?: StringFilter<"payments"> | string
    orderId?: StringFilter<"payments"> | string
    status?: EnumOrderStatusFilter<"payments"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"payments"> | Date | string
    updatedAt?: DateTimeFilter<"payments"> | Date | string
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    paymentCode?: SortOrder
    discount?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentCode?: string
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    discount?: IntFilter<"payments"> | number
    amount?: IntFilter<"payments"> | number
    paymentMethod?: StringFilter<"payments"> | string
    orderId?: StringFilter<"payments"> | string
    status?: EnumOrderStatusFilter<"payments"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"payments"> | Date | string
    updatedAt?: DateTimeFilter<"payments"> | Date | string
  }, "id" | "paymentCode">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    paymentCode?: SortOrder
    discount?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"payments"> | string
    paymentCode?: StringWithAggregatesFilter<"payments"> | string
    discount?: IntWithAggregatesFilter<"payments"> | number
    amount?: IntWithAggregatesFilter<"payments"> | number
    paymentMethod?: StringWithAggregatesFilter<"payments"> | string
    orderId?: StringWithAggregatesFilter<"payments"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"payments"> | $Enums.OrderStatus
    createdAt?: DateTimeWithAggregatesFilter<"payments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"payments"> | Date | string
  }

  export type referral_ordersWhereInput = {
    AND?: referral_ordersWhereInput | referral_ordersWhereInput[]
    OR?: referral_ordersWhereInput[]
    NOT?: referral_ordersWhereInput | referral_ordersWhereInput[]
    id?: StringFilter<"referral_orders"> | string
    orderId?: StringFilter<"referral_orders"> | string
    referralId?: StringFilter<"referral_orders"> | string
    createdAt?: DateTimeFilter<"referral_orders"> | Date | string
    updatedAt?: DateTimeFilter<"referral_orders"> | Date | string
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    referrals?: XOR<ReferralsScalarRelationFilter, referralsWhereInput>
  }

  export type referral_ordersOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    referralId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: ordersOrderByWithRelationInput
    referrals?: referralsOrderByWithRelationInput
  }

  export type referral_ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: referral_ordersWhereInput | referral_ordersWhereInput[]
    OR?: referral_ordersWhereInput[]
    NOT?: referral_ordersWhereInput | referral_ordersWhereInput[]
    orderId?: StringFilter<"referral_orders"> | string
    referralId?: StringFilter<"referral_orders"> | string
    createdAt?: DateTimeFilter<"referral_orders"> | Date | string
    updatedAt?: DateTimeFilter<"referral_orders"> | Date | string
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    referrals?: XOR<ReferralsScalarRelationFilter, referralsWhereInput>
  }, "id">

  export type referral_ordersOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    referralId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: referral_ordersCountOrderByAggregateInput
    _max?: referral_ordersMaxOrderByAggregateInput
    _min?: referral_ordersMinOrderByAggregateInput
  }

  export type referral_ordersScalarWhereWithAggregatesInput = {
    AND?: referral_ordersScalarWhereWithAggregatesInput | referral_ordersScalarWhereWithAggregatesInput[]
    OR?: referral_ordersScalarWhereWithAggregatesInput[]
    NOT?: referral_ordersScalarWhereWithAggregatesInput | referral_ordersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"referral_orders"> | string
    orderId?: StringWithAggregatesFilter<"referral_orders"> | string
    referralId?: StringWithAggregatesFilter<"referral_orders"> | string
    createdAt?: DateTimeWithAggregatesFilter<"referral_orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"referral_orders"> | Date | string
  }

  export type referralsWhereInput = {
    AND?: referralsWhereInput | referralsWhereInput[]
    OR?: referralsWhereInput[]
    NOT?: referralsWhereInput | referralsWhereInput[]
    id?: StringFilter<"referrals"> | string
    code?: StringFilter<"referrals"> | string
    discount?: IntFilter<"referrals"> | number
    createdAt?: DateTimeFilter<"referrals"> | Date | string
    updatedAt?: DateTimeFilter<"referrals"> | Date | string
    referralId?: StringNullableFilter<"referrals"> | string | null
    referral_orders?: Referral_ordersListRelationFilter
  }

  export type referralsOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referralId?: SortOrderInput | SortOrder
    referral_orders?: referral_ordersOrderByRelationAggregateInput
  }

  export type referralsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: referralsWhereInput | referralsWhereInput[]
    OR?: referralsWhereInput[]
    NOT?: referralsWhereInput | referralsWhereInput[]
    discount?: IntFilter<"referrals"> | number
    createdAt?: DateTimeFilter<"referrals"> | Date | string
    updatedAt?: DateTimeFilter<"referrals"> | Date | string
    referralId?: StringNullableFilter<"referrals"> | string | null
    referral_orders?: Referral_ordersListRelationFilter
  }, "id" | "code">

  export type referralsOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referralId?: SortOrderInput | SortOrder
    _count?: referralsCountOrderByAggregateInput
    _avg?: referralsAvgOrderByAggregateInput
    _max?: referralsMaxOrderByAggregateInput
    _min?: referralsMinOrderByAggregateInput
    _sum?: referralsSumOrderByAggregateInput
  }

  export type referralsScalarWhereWithAggregatesInput = {
    AND?: referralsScalarWhereWithAggregatesInput | referralsScalarWhereWithAggregatesInput[]
    OR?: referralsScalarWhereWithAggregatesInput[]
    NOT?: referralsScalarWhereWithAggregatesInput | referralsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"referrals"> | string
    code?: StringWithAggregatesFilter<"referrals"> | string
    discount?: IntWithAggregatesFilter<"referrals"> | number
    createdAt?: DateTimeWithAggregatesFilter<"referrals"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"referrals"> | Date | string
    referralId?: StringNullableWithAggregatesFilter<"referrals"> | string | null
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    featured?: string | null
    status?: boolean
    orders?: ordersCreateNestedManyWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    featured?: string | null
    status?: boolean
    orders?: ordersUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    orders?: ordersUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    orders?: ordersUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    featured?: string | null
    status?: boolean
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.UserStatus
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type ordersCreateInput = {
    id: string
    paymentId?: string | null
    referralId?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt: Date | string
    products: ProductCreateNestedOneWithoutOrdersInput
    users: UserCreateNestedOneWithoutOrdersInput
    referral_orders?: referral_ordersCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id: string
    productId: string
    userId: string
    paymentId?: string | null
    referralId?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt: Date | string
    referral_orders?: referral_ordersUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    users?: UserUpdateOneRequiredWithoutOrdersNestedInput
    referral_orders?: referral_ordersUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral_orders?: referral_ordersUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id: string
    productId: string
    userId: string
    paymentId?: string | null
    referralId?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ordersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateInput = {
    id: string
    paymentCode: string
    discount: number
    amount: number
    paymentMethod: string
    orderId: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type paymentsUncheckedCreateInput = {
    id: string
    paymentCode: string
    discount: number
    amount: number
    paymentMethod: string
    orderId: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type paymentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentCode?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentCode?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateManyInput = {
    id: string
    paymentCode: string
    discount: number
    amount: number
    paymentMethod: string
    orderId: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type paymentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentCode?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentCode?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type referral_ordersCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    orders: ordersCreateNestedOneWithoutReferral_ordersInput
    referrals: referralsCreateNestedOneWithoutReferral_ordersInput
  }

  export type referral_ordersUncheckedCreateInput = {
    id: string
    orderId: string
    referralId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type referral_ordersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateOneRequiredWithoutReferral_ordersNestedInput
    referrals?: referralsUpdateOneRequiredWithoutReferral_ordersNestedInput
  }

  export type referral_ordersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    referralId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type referral_ordersCreateManyInput = {
    id: string
    orderId: string
    referralId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type referral_ordersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type referral_ordersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    referralId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type referralsCreateInput = {
    id: string
    code: string
    discount: number
    createdAt?: Date | string
    updatedAt: Date | string
    referralId?: string | null
    referral_orders?: referral_ordersCreateNestedManyWithoutReferralsInput
  }

  export type referralsUncheckedCreateInput = {
    id: string
    code: string
    discount: number
    createdAt?: Date | string
    updatedAt: Date | string
    referralId?: string | null
    referral_orders?: referral_ordersUncheckedCreateNestedManyWithoutReferralsInput
  }

  export type referralsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
    referral_orders?: referral_ordersUpdateManyWithoutReferralsNestedInput
  }

  export type referralsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
    referral_orders?: referral_ordersUncheckedUpdateManyWithoutReferralsNestedInput
  }

  export type referralsCreateManyInput = {
    id: string
    code: string
    discount: number
    createdAt?: Date | string
    updatedAt: Date | string
    referralId?: string | null
  }

  export type referralsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type referralsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    featured?: SortOrder
    status?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    featured?: SortOrder
    status?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    featured?: SortOrder
    status?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Referral_ordersListRelationFilter = {
    every?: referral_ordersWhereInput
    some?: referral_ordersWhereInput
    none?: referral_ordersWhereInput
  }

  export type referral_ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    referralId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    referralId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    referralId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    paymentCode?: SortOrder
    discount?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    discount?: SortOrder
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentCode?: SortOrder
    discount?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    paymentCode?: SortOrder
    discount?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    discount?: SortOrder
    amount?: SortOrder
  }

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type ReferralsScalarRelationFilter = {
    is?: referralsWhereInput
    isNot?: referralsWhereInput
  }

  export type referral_ordersCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    referralId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type referral_ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    referralId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type referral_ordersMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    referralId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type referralsCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referralId?: SortOrder
  }

  export type referralsAvgOrderByAggregateInput = {
    discount?: SortOrder
  }

  export type referralsMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referralId?: SortOrder
  }

  export type referralsMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referralId?: SortOrder
  }

  export type referralsSumOrderByAggregateInput = {
    discount?: SortOrder
  }

  export type ordersCreateNestedManyWithoutProductsInput = {
    create?: XOR<ordersCreateWithoutProductsInput, ordersUncheckedCreateWithoutProductsInput> | ordersCreateWithoutProductsInput[] | ordersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutProductsInput | ordersCreateOrConnectWithoutProductsInput[]
    createMany?: ordersCreateManyProductsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<ordersCreateWithoutProductsInput, ordersUncheckedCreateWithoutProductsInput> | ordersCreateWithoutProductsInput[] | ordersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutProductsInput | ordersCreateOrConnectWithoutProductsInput[]
    createMany?: ordersCreateManyProductsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ordersUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ordersCreateWithoutProductsInput, ordersUncheckedCreateWithoutProductsInput> | ordersCreateWithoutProductsInput[] | ordersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutProductsInput | ordersCreateOrConnectWithoutProductsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutProductsInput | ordersUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ordersCreateManyProductsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutProductsInput | ordersUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutProductsInput | ordersUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ordersCreateWithoutProductsInput, ordersUncheckedCreateWithoutProductsInput> | ordersCreateWithoutProductsInput[] | ordersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutProductsInput | ordersCreateOrConnectWithoutProductsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutProductsInput | ordersUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ordersCreateManyProductsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutProductsInput | ordersUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutProductsInput | ordersUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type referral_ordersCreateNestedManyWithoutOrdersInput = {
    create?: XOR<referral_ordersCreateWithoutOrdersInput, referral_ordersUncheckedCreateWithoutOrdersInput> | referral_ordersCreateWithoutOrdersInput[] | referral_ordersUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: referral_ordersCreateOrConnectWithoutOrdersInput | referral_ordersCreateOrConnectWithoutOrdersInput[]
    createMany?: referral_ordersCreateManyOrdersInputEnvelope
    connect?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
  }

  export type referral_ordersUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<referral_ordersCreateWithoutOrdersInput, referral_ordersUncheckedCreateWithoutOrdersInput> | referral_ordersCreateWithoutOrdersInput[] | referral_ordersUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: referral_ordersCreateOrConnectWithoutOrdersInput | referral_ordersCreateOrConnectWithoutOrdersInput[]
    createMany?: referral_ordersCreateManyOrdersInputEnvelope
    connect?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type ProductUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    upsert?: ProductUpsertWithoutOrdersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrdersInput, ProductUpdateWithoutOrdersInput>, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type referral_ordersUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<referral_ordersCreateWithoutOrdersInput, referral_ordersUncheckedCreateWithoutOrdersInput> | referral_ordersCreateWithoutOrdersInput[] | referral_ordersUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: referral_ordersCreateOrConnectWithoutOrdersInput | referral_ordersCreateOrConnectWithoutOrdersInput[]
    upsert?: referral_ordersUpsertWithWhereUniqueWithoutOrdersInput | referral_ordersUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: referral_ordersCreateManyOrdersInputEnvelope
    set?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    disconnect?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    delete?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    connect?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    update?: referral_ordersUpdateWithWhereUniqueWithoutOrdersInput | referral_ordersUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: referral_ordersUpdateManyWithWhereWithoutOrdersInput | referral_ordersUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: referral_ordersScalarWhereInput | referral_ordersScalarWhereInput[]
  }

  export type referral_ordersUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<referral_ordersCreateWithoutOrdersInput, referral_ordersUncheckedCreateWithoutOrdersInput> | referral_ordersCreateWithoutOrdersInput[] | referral_ordersUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: referral_ordersCreateOrConnectWithoutOrdersInput | referral_ordersCreateOrConnectWithoutOrdersInput[]
    upsert?: referral_ordersUpsertWithWhereUniqueWithoutOrdersInput | referral_ordersUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: referral_ordersCreateManyOrdersInputEnvelope
    set?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    disconnect?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    delete?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    connect?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    update?: referral_ordersUpdateWithWhereUniqueWithoutOrdersInput | referral_ordersUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: referral_ordersUpdateManyWithWhereWithoutOrdersInput | referral_ordersUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: referral_ordersScalarWhereInput | referral_ordersScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutReferral_ordersInput = {
    create?: XOR<ordersCreateWithoutReferral_ordersInput, ordersUncheckedCreateWithoutReferral_ordersInput>
    connectOrCreate?: ordersCreateOrConnectWithoutReferral_ordersInput
    connect?: ordersWhereUniqueInput
  }

  export type referralsCreateNestedOneWithoutReferral_ordersInput = {
    create?: XOR<referralsCreateWithoutReferral_ordersInput, referralsUncheckedCreateWithoutReferral_ordersInput>
    connectOrCreate?: referralsCreateOrConnectWithoutReferral_ordersInput
    connect?: referralsWhereUniqueInput
  }

  export type ordersUpdateOneRequiredWithoutReferral_ordersNestedInput = {
    create?: XOR<ordersCreateWithoutReferral_ordersInput, ordersUncheckedCreateWithoutReferral_ordersInput>
    connectOrCreate?: ordersCreateOrConnectWithoutReferral_ordersInput
    upsert?: ordersUpsertWithoutReferral_ordersInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutReferral_ordersInput, ordersUpdateWithoutReferral_ordersInput>, ordersUncheckedUpdateWithoutReferral_ordersInput>
  }

  export type referralsUpdateOneRequiredWithoutReferral_ordersNestedInput = {
    create?: XOR<referralsCreateWithoutReferral_ordersInput, referralsUncheckedCreateWithoutReferral_ordersInput>
    connectOrCreate?: referralsCreateOrConnectWithoutReferral_ordersInput
    upsert?: referralsUpsertWithoutReferral_ordersInput
    connect?: referralsWhereUniqueInput
    update?: XOR<XOR<referralsUpdateToOneWithWhereWithoutReferral_ordersInput, referralsUpdateWithoutReferral_ordersInput>, referralsUncheckedUpdateWithoutReferral_ordersInput>
  }

  export type referral_ordersCreateNestedManyWithoutReferralsInput = {
    create?: XOR<referral_ordersCreateWithoutReferralsInput, referral_ordersUncheckedCreateWithoutReferralsInput> | referral_ordersCreateWithoutReferralsInput[] | referral_ordersUncheckedCreateWithoutReferralsInput[]
    connectOrCreate?: referral_ordersCreateOrConnectWithoutReferralsInput | referral_ordersCreateOrConnectWithoutReferralsInput[]
    createMany?: referral_ordersCreateManyReferralsInputEnvelope
    connect?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
  }

  export type referral_ordersUncheckedCreateNestedManyWithoutReferralsInput = {
    create?: XOR<referral_ordersCreateWithoutReferralsInput, referral_ordersUncheckedCreateWithoutReferralsInput> | referral_ordersCreateWithoutReferralsInput[] | referral_ordersUncheckedCreateWithoutReferralsInput[]
    connectOrCreate?: referral_ordersCreateOrConnectWithoutReferralsInput | referral_ordersCreateOrConnectWithoutReferralsInput[]
    createMany?: referral_ordersCreateManyReferralsInputEnvelope
    connect?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
  }

  export type referral_ordersUpdateManyWithoutReferralsNestedInput = {
    create?: XOR<referral_ordersCreateWithoutReferralsInput, referral_ordersUncheckedCreateWithoutReferralsInput> | referral_ordersCreateWithoutReferralsInput[] | referral_ordersUncheckedCreateWithoutReferralsInput[]
    connectOrCreate?: referral_ordersCreateOrConnectWithoutReferralsInput | referral_ordersCreateOrConnectWithoutReferralsInput[]
    upsert?: referral_ordersUpsertWithWhereUniqueWithoutReferralsInput | referral_ordersUpsertWithWhereUniqueWithoutReferralsInput[]
    createMany?: referral_ordersCreateManyReferralsInputEnvelope
    set?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    disconnect?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    delete?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    connect?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    update?: referral_ordersUpdateWithWhereUniqueWithoutReferralsInput | referral_ordersUpdateWithWhereUniqueWithoutReferralsInput[]
    updateMany?: referral_ordersUpdateManyWithWhereWithoutReferralsInput | referral_ordersUpdateManyWithWhereWithoutReferralsInput[]
    deleteMany?: referral_ordersScalarWhereInput | referral_ordersScalarWhereInput[]
  }

  export type referral_ordersUncheckedUpdateManyWithoutReferralsNestedInput = {
    create?: XOR<referral_ordersCreateWithoutReferralsInput, referral_ordersUncheckedCreateWithoutReferralsInput> | referral_ordersCreateWithoutReferralsInput[] | referral_ordersUncheckedCreateWithoutReferralsInput[]
    connectOrCreate?: referral_ordersCreateOrConnectWithoutReferralsInput | referral_ordersCreateOrConnectWithoutReferralsInput[]
    upsert?: referral_ordersUpsertWithWhereUniqueWithoutReferralsInput | referral_ordersUpsertWithWhereUniqueWithoutReferralsInput[]
    createMany?: referral_ordersCreateManyReferralsInputEnvelope
    set?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    disconnect?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    delete?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    connect?: referral_ordersWhereUniqueInput | referral_ordersWhereUniqueInput[]
    update?: referral_ordersUpdateWithWhereUniqueWithoutReferralsInput | referral_ordersUpdateWithWhereUniqueWithoutReferralsInput[]
    updateMany?: referral_ordersUpdateManyWithWhereWithoutReferralsInput | referral_ordersUpdateManyWithWhereWithoutReferralsInput[]
    deleteMany?: referral_ordersScalarWhereInput | referral_ordersScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type ordersCreateWithoutProductsInput = {
    id: string
    paymentId?: string | null
    referralId?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt: Date | string
    users: UserCreateNestedOneWithoutOrdersInput
    referral_orders?: referral_ordersCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutProductsInput = {
    id: string
    userId: string
    paymentId?: string | null
    referralId?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt: Date | string
    referral_orders?: referral_ordersUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutProductsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutProductsInput, ordersUncheckedCreateWithoutProductsInput>
  }

  export type ordersCreateManyProductsInputEnvelope = {
    data: ordersCreateManyProductsInput | ordersCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutProductsInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutProductsInput, ordersUncheckedUpdateWithoutProductsInput>
    create: XOR<ordersCreateWithoutProductsInput, ordersUncheckedCreateWithoutProductsInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutProductsInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutProductsInput, ordersUncheckedUpdateWithoutProductsInput>
  }

  export type ordersUpdateManyWithWhereWithoutProductsInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutProductsInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: StringFilter<"orders"> | string
    productId?: StringFilter<"orders"> | string
    userId?: StringFilter<"orders"> | string
    paymentId?: StringNullableFilter<"orders"> | string | null
    referralId?: StringNullableFilter<"orders"> | string | null
    status?: EnumOrderStatusFilter<"orders"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"orders"> | Date | string
    updatedAt?: DateTimeFilter<"orders"> | Date | string
  }

  export type ordersCreateWithoutUsersInput = {
    id: string
    paymentId?: string | null
    referralId?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt: Date | string
    products: ProductCreateNestedOneWithoutOrdersInput
    referral_orders?: referral_ordersCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    id: string
    productId: string
    paymentId?: string | null
    referralId?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt: Date | string
    referral_orders?: referral_ordersUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: ordersCreateManyUsersInput | ordersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsersInput>
  }

  export type ProductCreateWithoutOrdersInput = {
    id?: string
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    featured?: string | null
    status?: boolean
  }

  export type ProductUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    featured?: string | null
    status?: boolean
  }

  export type ProductCreateOrConnectWithoutOrdersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.UserStatus
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.UserStatus
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type referral_ordersCreateWithoutOrdersInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    referrals: referralsCreateNestedOneWithoutReferral_ordersInput
  }

  export type referral_ordersUncheckedCreateWithoutOrdersInput = {
    id: string
    referralId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type referral_ordersCreateOrConnectWithoutOrdersInput = {
    where: referral_ordersWhereUniqueInput
    create: XOR<referral_ordersCreateWithoutOrdersInput, referral_ordersUncheckedCreateWithoutOrdersInput>
  }

  export type referral_ordersCreateManyOrdersInputEnvelope = {
    data: referral_ordersCreateManyOrdersInput | referral_ordersCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutOrdersInput = {
    update: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type referral_ordersUpsertWithWhereUniqueWithoutOrdersInput = {
    where: referral_ordersWhereUniqueInput
    update: XOR<referral_ordersUpdateWithoutOrdersInput, referral_ordersUncheckedUpdateWithoutOrdersInput>
    create: XOR<referral_ordersCreateWithoutOrdersInput, referral_ordersUncheckedCreateWithoutOrdersInput>
  }

  export type referral_ordersUpdateWithWhereUniqueWithoutOrdersInput = {
    where: referral_ordersWhereUniqueInput
    data: XOR<referral_ordersUpdateWithoutOrdersInput, referral_ordersUncheckedUpdateWithoutOrdersInput>
  }

  export type referral_ordersUpdateManyWithWhereWithoutOrdersInput = {
    where: referral_ordersScalarWhereInput
    data: XOR<referral_ordersUpdateManyMutationInput, referral_ordersUncheckedUpdateManyWithoutOrdersInput>
  }

  export type referral_ordersScalarWhereInput = {
    AND?: referral_ordersScalarWhereInput | referral_ordersScalarWhereInput[]
    OR?: referral_ordersScalarWhereInput[]
    NOT?: referral_ordersScalarWhereInput | referral_ordersScalarWhereInput[]
    id?: StringFilter<"referral_orders"> | string
    orderId?: StringFilter<"referral_orders"> | string
    referralId?: StringFilter<"referral_orders"> | string
    createdAt?: DateTimeFilter<"referral_orders"> | Date | string
    updatedAt?: DateTimeFilter<"referral_orders"> | Date | string
  }

  export type ordersCreateWithoutReferral_ordersInput = {
    id: string
    paymentId?: string | null
    referralId?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt: Date | string
    products: ProductCreateNestedOneWithoutOrdersInput
    users: UserCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutReferral_ordersInput = {
    id: string
    productId: string
    userId: string
    paymentId?: string | null
    referralId?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ordersCreateOrConnectWithoutReferral_ordersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutReferral_ordersInput, ordersUncheckedCreateWithoutReferral_ordersInput>
  }

  export type referralsCreateWithoutReferral_ordersInput = {
    id: string
    code: string
    discount: number
    createdAt?: Date | string
    updatedAt: Date | string
    referralId?: string | null
  }

  export type referralsUncheckedCreateWithoutReferral_ordersInput = {
    id: string
    code: string
    discount: number
    createdAt?: Date | string
    updatedAt: Date | string
    referralId?: string | null
  }

  export type referralsCreateOrConnectWithoutReferral_ordersInput = {
    where: referralsWhereUniqueInput
    create: XOR<referralsCreateWithoutReferral_ordersInput, referralsUncheckedCreateWithoutReferral_ordersInput>
  }

  export type ordersUpsertWithoutReferral_ordersInput = {
    update: XOR<ordersUpdateWithoutReferral_ordersInput, ordersUncheckedUpdateWithoutReferral_ordersInput>
    create: XOR<ordersCreateWithoutReferral_ordersInput, ordersUncheckedCreateWithoutReferral_ordersInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutReferral_ordersInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutReferral_ordersInput, ordersUncheckedUpdateWithoutReferral_ordersInput>
  }

  export type ordersUpdateWithoutReferral_ordersInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    users?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutReferral_ordersInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type referralsUpsertWithoutReferral_ordersInput = {
    update: XOR<referralsUpdateWithoutReferral_ordersInput, referralsUncheckedUpdateWithoutReferral_ordersInput>
    create: XOR<referralsCreateWithoutReferral_ordersInput, referralsUncheckedCreateWithoutReferral_ordersInput>
    where?: referralsWhereInput
  }

  export type referralsUpdateToOneWithWhereWithoutReferral_ordersInput = {
    where?: referralsWhereInput
    data: XOR<referralsUpdateWithoutReferral_ordersInput, referralsUncheckedUpdateWithoutReferral_ordersInput>
  }

  export type referralsUpdateWithoutReferral_ordersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type referralsUncheckedUpdateWithoutReferral_ordersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type referral_ordersCreateWithoutReferralsInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    orders: ordersCreateNestedOneWithoutReferral_ordersInput
  }

  export type referral_ordersUncheckedCreateWithoutReferralsInput = {
    id: string
    orderId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type referral_ordersCreateOrConnectWithoutReferralsInput = {
    where: referral_ordersWhereUniqueInput
    create: XOR<referral_ordersCreateWithoutReferralsInput, referral_ordersUncheckedCreateWithoutReferralsInput>
  }

  export type referral_ordersCreateManyReferralsInputEnvelope = {
    data: referral_ordersCreateManyReferralsInput | referral_ordersCreateManyReferralsInput[]
    skipDuplicates?: boolean
  }

  export type referral_ordersUpsertWithWhereUniqueWithoutReferralsInput = {
    where: referral_ordersWhereUniqueInput
    update: XOR<referral_ordersUpdateWithoutReferralsInput, referral_ordersUncheckedUpdateWithoutReferralsInput>
    create: XOR<referral_ordersCreateWithoutReferralsInput, referral_ordersUncheckedCreateWithoutReferralsInput>
  }

  export type referral_ordersUpdateWithWhereUniqueWithoutReferralsInput = {
    where: referral_ordersWhereUniqueInput
    data: XOR<referral_ordersUpdateWithoutReferralsInput, referral_ordersUncheckedUpdateWithoutReferralsInput>
  }

  export type referral_ordersUpdateManyWithWhereWithoutReferralsInput = {
    where: referral_ordersScalarWhereInput
    data: XOR<referral_ordersUpdateManyMutationInput, referral_ordersUncheckedUpdateManyWithoutReferralsInput>
  }

  export type ordersCreateManyProductsInput = {
    id: string
    userId: string
    paymentId?: string | null
    referralId?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ordersUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateOneRequiredWithoutOrdersNestedInput
    referral_orders?: referral_ordersUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral_orders?: referral_ordersUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateManyUsersInput = {
    id: string
    productId: string
    paymentId?: string | null
    referralId?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ordersUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    referral_orders?: referral_ordersUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral_orders?: referral_ordersUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    referralId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type referral_ordersCreateManyOrdersInput = {
    id: string
    referralId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type referral_ordersUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: referralsUpdateOneRequiredWithoutReferral_ordersNestedInput
  }

  export type referral_ordersUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    referralId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type referral_ordersUncheckedUpdateManyWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    referralId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type referral_ordersCreateManyReferralsInput = {
    id: string
    orderId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type referral_ordersUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateOneRequiredWithoutReferral_ordersNestedInput
  }

  export type referral_ordersUncheckedUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type referral_ordersUncheckedUpdateManyWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
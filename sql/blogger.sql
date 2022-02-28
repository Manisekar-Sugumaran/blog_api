--- BLOG LIKES ---

CREATE TABLE IF NOT EXISTS public.blog_likes
(
    id integer NOT NULL DEFAULT nextval('blog_likes_id_seq'::regclass),
    likes integer,
    user_id integer,
    blog_id integer,
    is_liked boolean NOT NULL DEFAULT false,
    created_by character varying COLLATE pg_catalog."default",
    updated_by character varying COLLATE pg_catalog."default",
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT blog_likes_pkey PRIMARY KEY (id),
    CONSTRAINT blog_id_fkey FOREIGN KEY (blog_id)
        REFERENCES public.blogs (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)



--- BLOGS ---

CREATE TABLE IF NOT EXISTS public.blogs
(
    id integer NOT NULL DEFAULT nextval('blog_details_id_seq'::regclass),
    title character varying COLLATE pg_catalog."default",
    summary text COLLATE pg_catalog."default",
    created_by character varying COLLATE pg_catalog."default",
    updated_by character varying COLLATE pg_catalog."default",
    user_id integer,
    category_id json,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    image character varying COLLATE pg_catalog."default",
    content text COLLATE pg_catalog."default",
    CONSTRAINT blog_details_pkey PRIMARY KEY (id),
    CONSTRAINT user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
)


--- COMMENTS ---

CREATE TABLE IF NOT EXISTS public.comments
(
    id integer NOT NULL DEFAULT nextval('comments_id_seq'::regclass),
    blog_id integer,
    comment character varying COLLATE pg_catalog."default",
    created_by character varying COLLATE pg_catalog."default",
    updated_by character varying COLLATE pg_catalog."default",
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    is_approved boolean DEFAULT false,
    CONSTRAINT comments_pkey PRIMARY KEY (id),
    CONSTRAINT fk_blog_id FOREIGN KEY (blog_id)
        REFERENCES public.blogs (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)


--- TAGS ---

CREATE TABLE IF NOT EXISTS public.tags
(
    id integer NOT NULL DEFAULT nextval('tags_id_seq'::regclass),
    category character varying COLLATE pg_catalog."default",
    created_by character varying COLLATE pg_catalog."default",
    updated_by character varying COLLATE pg_catalog."default",
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT tags_pkey PRIMARY KEY (id)
)


--- USERS ---


CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('reg_details_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default",
    user_name character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default",
    password text COLLATE pg_catalog."default",
    created_by character varying COLLATE pg_catalog."default",
    updated_by character varying COLLATE pg_catalog."default",
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    token character varying COLLATE pg_catalog."default",
    CONSTRAINT reg_details_pkey PRIMARY KEY (id)
)

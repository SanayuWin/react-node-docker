CREATE DATABASE IF NOT EXISTS admin_db;

CREATE TABLE IF NOT EXISTS public."group"
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    types text COLLATE pg_catalog."default" NOT NULL,
    run text COLLATE pg_catalog."default" NOT NULL,
    datas text COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp without time zone,
    CONSTRAINT group_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."group"
    OWNER to postgres;


-- Table: public.graphic

-- DROP TABLE IF EXISTS public.graphic;

CREATE TABLE IF NOT EXISTS public.graphic
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    num integer NOT NULL,
    layer numeric NOT NULL,
    height numeric NOT NULL,
    width numeric NOT NULL,
    x_axis numeric NOT NULL,
    y_axis numeric NOT NULL,
    border_weight integer NOT NULL,
    border_color text COLLATE pg_catalog."default" NOT NULL,
    font_size numeric NOT NULL,
    font_weight integer NOT NULL,
    note text COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp without time zone NOT NULL,
    CONSTRAINT graphic_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.graphic
    OWNER to postgres;


-- Insert table group

-- INSERT INTO public."group"(
-- 	 types, run, datas, created_at)
-- 	VALUES ('random', 1, 1000, '2023-10-03');


-- Insert graphic

-- INSERT INTO public.graphic(
-- 	 num, layer, height, width, x_axis, y_axis, border_weight, border_color, font_size, font_weight, note, created_at)
-- 	VALUES ( 2, 1, 50, 50, 0, 0, 600, '#FFFFFF', 16, 600, 'test', '2023-10-03');
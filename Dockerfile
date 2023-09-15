FROM oven/bun

COPY . /app
WORKDIR /app
RUN ["bun", "install"]


EXPOSE 3000
ENTRYPOINT [ "bun", "src/index.tsx" ]

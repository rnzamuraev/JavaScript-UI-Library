const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

const hash = (ext) => {
  return isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`;
};

const jsLoaders = () => {
  const loader = [
    {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  ];

  if (isDev) {
    loader.push("eslint-loader");
  }

  return loader;
};

console.log("IS DEV", isDev);
console.log("IS PROD", isProd);

module.exports = {
  mode: "development",
  entry: [
    "@babel/polyfill",
    path.resolve(__dirname, "src", "js/script.js"),
  ],
  output: {
    filename: hash("js"),
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: isDev ? "source-map" : false,
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 5000,
    open: true,
    hot: isDev,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "src",
        "index.html"
      ),
    }),
    new MiniCssExtractPlugin({
      filename: hash("css"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(
            __dirname,
            "src",
            "img/sprite/sprite.svg"
          ),
          to: path.resolve(__dirname, "dist/img"),
        },
        {
          from: path.resolve(
            __dirname,
            "src",
            "img/icons/"
          ),
          to: path.resolve(__dirname, "dist/img/"),
        },
      ],
    }),
    // minify: {
    //   removeComments: isProd,
    //   collapseWhitespace: isProd,
    // },
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        // use: jsLoaders(),
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: isDev
          ? []
          : [
              {
                loader: "image-webpack-loader",
                options: {
                  mozjpeg: {
                    progressive: true,
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75,
                  },
                },
              },
            ],
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".html", ".css", ".scss", ".sass", ".js"],
  },
};

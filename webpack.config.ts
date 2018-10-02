import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

interface IConfig extends webpack.Configuration {
    devServer: {
        hot: boolean;
    };
}

const config: IConfig = {
    mode: "production",
    performance: {
        hints: false
    },
    entry: [
        "./src/index.tsx",
        "./src/style.less",
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
    },
    // Enable sourcemaps for debugging webpack"s output.
    devtool: "source-map",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".less"]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "Jostein Thorsen | Designer & Developer",
            chunksSortMode: "dependency",
            template: path.resolve(__dirname, "./src/index.ejs")
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: [
                    "awesome-typescript-loader"
                ],
                exclude: path.resolve(__dirname, "node_modules"),
                include: path.resolve(__dirname, "src"),
            },
            // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.less$/,
                loaders: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            paths: [path.resolve(__dirname, "node_modules")]
                        }
                    }
                ],
            }
        ]
    },
    devServer: {
        hot: true
    }
};

export default config;

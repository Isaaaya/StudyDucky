import asyncHandler from 'express-async-handler';
import {Request, Response} from 'express';
const Post = require('../models/post');

exports.getPosts = asyncHandler(async(req: Request, res: Response) => {
    const posts = await Post.find();
    res.status(200).json(posts);
    return;
});

exports.getPost = asyncHandler(async(req: Request, res: Response) => {
    const {id} = req.params;
    const post = await Post.findById(id);
    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).json({msg: 'No post was found.'});
    }
    return;
});

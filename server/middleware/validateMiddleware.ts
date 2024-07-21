import {Request, Response, NextFunction} from 'express';

module.exports = (validator: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = validator(req.body)
      console.log('error: ', error)
      if (error) {
        return res.status(400).send({msg: error.details[0].message})
      }
      next()
    }
  }
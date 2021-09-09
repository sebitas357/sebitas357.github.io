import React from "react";
import Link from "next/link";
import { map } from "lodash";
import moment from "moment";
import "moment/locale/es";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export default function BlogList(props) {
  const { blogs } = props;

  return (
    <div className="container">
      <div className="row">
        {map(blogs, (blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

function Blog(props) {
  const { blog } = props;

  return (
    <div className="col-md-4 mb-4">
      <Card>
        <CardImg top width="100%" src={blog.poster.url} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5"> {blog.title} </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {moment(blog.releaseDate).format("LL")}
          </CardSubtitle>
          <CardText>{blog.intro}</CardText>
          <Link href={`/${blog.url}`}>
            <a className="btn btn-outline-primary">Ver más</a>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}

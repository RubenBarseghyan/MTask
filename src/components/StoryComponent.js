import React, { Component, Fragment} from 'react';
import Pagination from "../pagination/Pagination";
import StoryListComponent from "./StoryListComponent";
import { validatePage, getStory, getTotalPages } from "../actions/Action";


class  StoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            story: null,
            isValidPage: true,
            stories: [],
            totalPages: 0
        };
    }

    componentWillMount() {
        const { match } = this.props;
        const { isValidPage } = this.state;

        if (!isValidPage) {
            return;
        }
        this.setState({
            isValidPage: validatePage(match.params.page)
        });
    }

    componentDidMount() {
        const { isValidPage } = this.state;
        const { match } = this.props;
        const { url } = match;
        const { page } = match.params;

        if (!isValidPage) {
            return;
        }
        this.setPagination(page, url);
    }

    componentWillReceiveProps(nextProps) {
        const prevUrl = this.props.match.url;
        const nextUrl = nextProps.match.url;
        const nextPage = nextProps.match.params.page;
        const [, next] = nextUrl.match(/\/([a-z]*)\//, "g");

        if (prevUrl !== nextUrl) {
            this.setState({
                isValidPage: validatePage(nextPage),
                page: parseInt(nextPage, 10),
                story: next,
                totalPages: getTotalPages(next)
            });
            this.getPages(next, nextPage);
        }
    }

    setPagination(page, path) {
        const [, story] = path.match(/\/([a-z]*)\//, "g");

        this.setState({
            story,
            page,
            totalPages: getTotalPages(story)
        });

        this.getPages(story, page);
    }

    getPages(story, page) {
        this.setState({
            stories: []
        });
        getStory(story, page).then((stories) => {
            this.setState({
                stories
            });
        });
    }

    render() {
        const { page, isValidPage, story, stories, totalPages } = this.state;
        return (
            <Fragment key={"1"}>
                {(isValidPage && (
                    <Fragment key={"2"}>
                        <Pagination story={story} page={page} pages={totalPages} />
                        <StoryListComponent story={story} page={page} stories={stories} />
                    </Fragment>
                )) || <h1 style={{margin: "15px"}}>Invalid page</h1>}
            </Fragment>
        );
    }
}

export default StoryComponent;

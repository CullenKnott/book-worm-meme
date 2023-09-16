import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login($email: String!, $password: String!) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($email: String!, $password: String!) {
        addUser($email: String!, $password: String!) {
            token
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                    authors
                    bookId
                    image
                    link
                    title
                    description
                }
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($newBook: InputBook!) {
        saveBook(newBook: $newBook) {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`
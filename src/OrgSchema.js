import makeOrgSchema from "./Org"

export default function JobSchema({ org }) {
    return (
        <script
            key={`jobJSON-${org.id}`}
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(makeOrgSchema(org)) }}
        />
    )
}
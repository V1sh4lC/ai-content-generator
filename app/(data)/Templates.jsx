export default [
    {
        "name": "Social Media Post",
        "desc": "An AI tool that generates engaging social media posts based on your input.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/733/733579.png",
        "aiPrompt": "Create 5 engaging social media post captions in bullet points only based on the given topic and target audience.",
        "slug": "generate-social-media-post",
        "form": [
            {
                "label": "Enter your post topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Describe your target audience",
                "field": "textarea",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Product Description",
        "desc": "An AI tool that creates detailed product descriptions for eCommerce listings.",
        "category": "eCommerce",
        "icon": "https://cdn-icons-png.flaticon.com/128/869/869636.png",
        "aiPrompt": "Generate a detailed product description in bullet points based on the given product name and features.",
        "slug": "generate-product-description",
        "form": [
            {
                "label": "Enter product name",
                "field": "input",
                "name": "productName",
                "required": true
            },
            {
                "label": "List product features",
                "field": "textarea",
                "name": "features"
            }
        ]
    },
    {
        "name": "SEO Meta Tags",
        "desc": "An AI tool that generates SEO meta titles and descriptions for web pages.",
        "category": "SEO",
        "icon": "https://cdn-icons-png.flaticon.com/128/1541/1541718.png",
        "aiPrompt": "Create SEO meta titles and descriptions in bullet points only based on the provided page content and keywords.",
        "slug": "generate-seo-meta-tags",
        "form": [
            {
                "label": "Enter page content",
                "field": "textarea",
                "name": "content",
                "required": true
            },
            {
                "label": "Enter keywords",
                "field": "input",
                "name": "keywords"
            }
        ]
    },
    {
        "name": "Ad Copy",
        "desc": "An AI tool that creates compelling ad copy for your campaigns.",
        "category": "Marketing",
        "icon": "https://cdn-icons-png.flaticon.com/128/609/609197.png",
        "aiPrompt": "Write 3 short and compelling ad copies in bullet points based on the provided product/service and target audience.",
        "slug": "generate-ad-copy",
        "form": [
            {
                "label": "Enter product/service name",
                "field": "input",
                "name": "service",
                "required": true
            },
            {
                "label": "Describe your target audience",
                "field": "textarea",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Email Subject Line",
        "desc": "An AI tool to generate catchy email subject lines.",
        "category": "Email",
        "icon": "https://cdn-icons-png.flaticon.com/128/732/732200.png",
        "aiPrompt": "Generate 5 catchy email subject lines in bullet points based on the given email content and purpose.",
        "slug": "generate-email-subject-line",
        "form": [
            {
                "label": "Enter email content",
                "field": "textarea",
                "name": "emailContent",
                "required": true
            },
            {
                "label": "Describe the purpose of the email",
                "field": "input",
                "name": "purpose"
            }
        ]
    },
    {
        "name": "Business Name Generator",
        "desc": "An AI tool to create unique business names.",
        "category": "Branding",
        "icon": "https://cdn-icons-png.flaticon.com/128/2950/2950623.png",
        "aiPrompt": "Generate 5 unique and catchy business name ideas in bullet points based on the given business niche and keywords.",
        "slug": "generate-business-name",
        "form": [
            {
                "label": "Enter your business niche",
                "field": "input",
                "name": "niche",
                "required": true
            },
            {
                "label": "Enter relevant keywords",
                "field": "input",
                "name": "keywords"
            }
        ]
    },
    {
        "name": "Hashtag Generator",
        "desc": "An AI tool to create trending hashtags for your social media posts.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/589/589708.png",
        "aiPrompt": "Generate 10 trending hashtags in bullet points only based on the given post topic and target audience.",
        "slug": "generate-hashtags",
        "form": [
            {
                "label": "Enter your post topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Describe your target audience",
                "field": "textarea",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Job Description",
        "desc": "An AI tool that generates detailed job descriptions for open roles.",
        "category": "Recruitment",
        "icon": "https://cdn-icons-png.flaticon.com/128/1907/1907722.png",
        "aiPrompt": "Write a detailed job description in bullet points only based on the given role, responsibilities, and qualifications.",
        "slug": "generate-job-description",
        "form": [
            {
                "label": "Enter the job title",
                "field": "input",
                "name": "jobTitle",
                "required": true
            },
            {
                "label": "List key responsibilities",
                "field": "textarea",
                "name": "responsibilities"
            }
        ]
    },
    {
        "name": "Quote Generator",
        "desc": "An AI tool to create motivational quotes.",
        "category": "Inspiration",
        "icon": "https://cdn-icons-png.flaticon.com/128/1077/1077172.png",
        "aiPrompt": "Generate 5 motivational quotes in bullet points based on the given theme.",
        "slug": "generate-quotes",
        "form": [
            {
                "label": "Enter the theme",
                "field": "input",
                "name": "theme",
                "required": true
            }
        ]
    },
    {
        "name": "Event Name Generator",
        "desc": "An AI tool to generate creative names for events.",
        "category": "Event Planning",
        "icon": "https://cdn-icons-png.flaticon.com/128/2921/2921222.png",
        "aiPrompt": "Generate 5 creative event names in bullet points based on the given event type and purpose.",
        "slug": "generate-event-name",
        "form": [
            {
                "label": "Enter the event type",
                "field": "input",
                "name": "eventType",
                "required": true
            },
            {
                "label": "Describe the event purpose",
                "field": "textarea",
                "name": "purpose"
            }
        ]
    }
]

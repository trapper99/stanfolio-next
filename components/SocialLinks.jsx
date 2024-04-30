import { socialLinks } from '@/portfolio'
import React from 'react'
import { Button } from 'reactstrap'

export const SocialLinks = () => {
  return (
    <div className='btn-wrapper text-lg'>
        {socialLinks.url && (
            <Button
              className='btn-icon-only rounded-circle ml-1'
              color='white'
              rel='noopener'
              aria-label='URL'
              href={socialLinks.url}
              target="_blank">
                <span className='btn-inner--icon'>
                    <i className='fa fa-link' />
                </span>
              </Button>
        )}
        {socialLinks.linkedin && (
            <Button
              className='btn-icon-only rounded-circle ml-1'
              color='linkedin'
              rel='noopener'
              aria-label='Linkedin'
              href={socialLinks.linkedin}
              target="_blank"
            >
              <span className='btn-inner--icon'>
                <i className='fa fa-linkedin' />
              </span>
            </Button>
        )}
        {socialLinks.github && (
          <Button
            className='btn-icon-only rounded-circle ml-1'
            color='github'
            href={socialLinks.github}
            rel='noopener'
            aria-label='Github'
            target="_blank"
          >
            <span className='btn-inner--icon'>
              <i className='fa fa-github' />
            </span>
          </Button>
        )}
        {socialLinks.twitter && (
          <Button
            className='btn-icon-only rounded-circle ml-1'
            color='twitter'
            href={socialLinks.twitter}
            rel='noopener'
            aria-label='Twitter'
            target="_blank"
          >
            <span className='btn-inner--icon'>
              <i className='fa fa-twitter' />
            </span>
          </Button>
        )}
        {socialLinks.whatsapp && (
          <Button
            className='btn-icon-only rounded-circle ml-1'
             color='whatsapp'
             href={socialLinks.whatsapp}
             rel='noopener'
             aria-label='Whatsapp'
             target="_blank"
            >
              <span className='btn-inner--icon'>
                <i className='fa fa-whatsapp' />
              </span>
            </Button>
        )}
    </div>
  )
}
